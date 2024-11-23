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

import { TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Форматирование сложности
function formatHashrate(difficulty: any): string {
  const units = ["H/s", "KH/s", "MH/s", "GH/s", "TH/s", "PH/s"];
  let value = Number(difficulty);
  let unitIndex = 0;

  while (value >= 1000 && unitIndex < units.length - 1) {
    value /= 1000;
    unitIndex++;
  }

  return `${value.toFixed(2)} ${units[unitIndex]}`;
}
const chartConfig = {
  difficulty: {
    label: "Difficulty",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const BlockExplorer = () => {
  const [blocks, setBlocks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [blockInterval, setBlockInterval] = React.useState("100");
  useEffect(() => {
    setLoading(true);
    console.log("fetching blocks");
    const fetchBlocks = async () => {
      const provider = new ethers.JsonRpcProvider("https://pub1.aplocoin.com");
      const currentBlockNumber = await provider.getBlockNumber();
      const fetchedBlocks = [];
      const blocksToFetch = parseInt(blockInterval);
      const startBlock = currentBlockNumber;
      const endBlock = currentBlockNumber - blocksToFetch * 50;

      // Fetch blocks with interval
      for (
        let blockNumber = startBlock;
        blockNumber > endBlock && blockNumber > 0;
        blockNumber -= blocksToFetch
      ) {
        console.log("fetching block", blockNumber);
        const block = await provider.getBlock(blockNumber);
        if (block) {
          fetchedBlocks.push({
            number: block.number,
            difficulty: block.difficulty,
            gasUsed: (
              (Number(block.gasUsed) / Number(block.gasLimit)) *
              100
            ).toString(),
            transactions: block.transactions.length,
          });
        }
      }
      setBlocks(fetchedBlocks.reverse());
      setLoading(false);
    };

    fetchBlocks();
  }, [useEffect, blockInterval]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Данные для графиков
  const difficultyData = blocks.map((block) => ({
    name: `${block.number}`,
    difficulty: Number(block.difficulty),
  }));

  const gasData = blocks.map((block) => ({
    name: `${block.number}`,
    gasUsed: Number(block.gasUsed),
    transactions: block.transactions,
  }));

  return (
    <Tabs defaultValue="difficulty">
      <TabsList>
        <TabsTrigger value="difficulty">Сложность</TabsTrigger>
        <TabsTrigger value="gas">Использование газа</TabsTrigger>
      </TabsList>

      {/* Вкладка сложности */}
      <TabsContent value="difficulty">
        <Card>
          <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
            <div className="grid flex-1 gap-1 text-center sm:text-left">
              <CardTitle>Сложность майнинга</CardTitle>
            </div>
            <Select value={blockInterval} onValueChange={setBlockInterval}>
              <SelectTrigger className="w-[160px] rounded-lg sm:ml-auto">
                <SelectValue placeholder="Интервал блоков" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 блоков</SelectItem>
                <SelectItem value="100">100 блоков</SelectItem>
                <SelectItem value="1000">1000 блоков</SelectItem>
                <SelectItem value="10000">10000 блоков</SelectItem>
              </SelectContent>
            </Select>
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
                    const blockId = e.activeLabel.replace("#", "");
                    window.open(
                      `https://explorer.aplocoin.com/block/${blockId}`
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
                  dataKey="blockNumber"
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
          <CardContent>
            <AreaChart
              width={800}
              height={400}
              data={gasData}
              onClick={(e) => {
                if (e && e.activeLabel) {
                  const blockId = e.activeLabel.replace("#", "");
                  window.open(`https://explorer.aplocoin.com/block/${blockId}`);
                }
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="gasUsed"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="transactions"
                stroke="#ffc658"
                fill="#ffc658"
              />
            </AreaChart>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default BlockExplorer;
