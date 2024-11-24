"use client";

import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  Tooltip,
  Bar,
  BarChart,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatHashrate } from "./utils";

const chartConfig = {
  difficulty: {
    label: "Difficulty",
    color: "hsl(var(--chart-1))",
  },
  gasused: {
    label: "gasused",
    color: "hsl(var(--chart-1))",
  },
  transactions: {
    label: "transactions",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export const Charts = () => {
  const [blocks, setBlocks] = useState<any[]>([]);
  const [blockInterval, setBlockInterval] = React.useState("100");
  useEffect(() => {
    console.log("fetching blocks");
    const fetchBlocks = async () => {
      const provider = new ethers.JsonRpcProvider("https://pub1.aplocoin.com");
      const currentBlockNumber = await provider.getBlockNumber();
      const blocksToFetch = parseInt(blockInterval);
      const startBlock = currentBlockNumber;
      const endBlock = currentBlockNumber - blocksToFetch * 50;

      // Create array of block numbers to fetch
      const blockNumbers = [];
      for (
        let blockNumber = startBlock;
        blockNumber > endBlock && blockNumber > 0;
        blockNumber -= blocksToFetch
      ) {
        blockNumbers.push(blockNumber);
      }

      // Fetch blocks in parallel
      const fetchedBlocks = await Promise.all(
        blockNumbers.map(async (blockNumber) => {
          const block = await provider.getBlock(blockNumber);
          if (block) {
            return {
              number: block.number,
              difficulty: block.difficulty,
              gasUsed: (
                (Number(block.gasUsed) / Number(block.gasLimit)) *
                100
              ).toFixed(2),
              transactions: block.transactions.length,
            };
          }
          return null;
        })
      );

      setBlocks(fetchedBlocks.filter((block) => block !== null).reverse());
    };

    fetchBlocks();
  }, [useEffect, blockInterval]);

  // Данные для графиков
  const difficultyData = blocks.map((block) => ({
    name: `${block.number}`,
    difficulty: Number(block.difficulty),
  }));

  const gasData = blocks.map((block) => ({
    name: `${block.number}`,
    gasused: block.gasUsed ,
    transactions: block.transactions,
  }));
  return (
    <Tabs defaultValue="difficulty" className="mr-4 py-4">
      <div className="flex row justify-between">
        <TabsList>
          <TabsTrigger value="difficulty">Сложность</TabsTrigger>
          <TabsTrigger value="gas">Использование газа</TabsTrigger>
        </TabsList>
        <Select value={blockInterval} onValueChange={setBlockInterval}>
          <SelectTrigger className="w-[160px] rounded-lg sm:ml-auto bg-background">
            <SelectValue placeholder="Интервал блоков" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 блок</SelectItem>
            <SelectItem value="100">100 блоков</SelectItem>
            <SelectItem value="1000">1000 блоков</SelectItem>
            <SelectItem value="10000">10000 блоков</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Вкладка сложности */}
      <TabsContent value="difficulty">
        <Card>
          <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
            <div className="grid flex-1 gap-1 text-center sm:text-left">
              <CardTitle>Сложность майнинга</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-[400px] w-full"
            >
              <AreaChart
                data={difficultyData}
                margin={{ left: 12, right: 12 }}
                onClick={(e) => {
                  if (e && e.activeLabel) {
                    window.open(
                      `https://explorer.aplocoin.com/block/${e.activeLabel}`
                    );
                  }
                }}
              >
                <defs>
                  <linearGradient
                    id="fillDifficulty"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="var(--color-difficulty)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-difficulty)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-background p-2 rounded-lg border">
                          <p>Блок: {label}</p>
                          <p>Сложность: {formatHashrate(payload[0].value)}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="difficulty"
                  fill="url(#fillDifficulty)"
                  stroke="var(--color-difficulty)"
                />
                <ChartLegend content={<ChartLegendContent />} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Вкладка газа */}
      <TabsContent value="gas">
        <Card>
          <CardHeader>
            <CardTitle>Использование газа и транзакции</CardTitle>
          </CardHeader>
          <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-[400px] w-full"
            >
              <BarChart
                accessibilityLayer
                data={gasData}
                onClick={(e) => {
                  if (e && e.activeLabel) {
                    window.open(
                      `https://explorer.aplocoin.com/block/${e.activeLabel}`
                    );
                  }
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />

                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-background p-2 rounded-lg border">
                          <p>Блок: {label}</p>
                          <p>Газ: {payload[0].value}</p>
                          <p>Транзакций: {payload[1].value}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="gasused" fill="var(--color-gasused)" radius={4} />
                <Bar
                  dataKey="transactions"
                  fill="var(--color-transactions)"
                  radius={4}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
