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
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { formatHashrate } from "./utils";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("Charts");
  const [blocks, setBlocks] = useState<any[]>([]);
  const [blockInterval, setBlockInterval] = React.useState("100");
  const [maxAmount, setmaxAmount] = React.useState(50);

  useEffect(() => {
    console.log("fetching blocks");
    const fetchBlocks = async () => {
      const provider = new ethers.JsonRpcProvider("https://pub1.aplocoin.com");
      const currentBlockNumber = await provider.getBlockNumber();
      const blocksToFetch = parseInt(blockInterval);
      const startBlock = currentBlockNumber;
      const endBlock = currentBlockNumber - blocksToFetch * maxAmount;

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
  }, [useEffect, blockInterval, maxAmount]);

  // Данные для графиков
  const difficultyData = blocks.map((block) => ({
    name: `${block.number}`,
    difficulty: Number(block.difficulty),
  }));

  const gasData = blocks.map((block) => ({
    name: `${block.number}`,
    gasused: block.gasUsed,
    transactions: block.transactions,
  }));
  return (
    <Tabs defaultValue="difficulty" className="mr-4 py-4">
      <div className="flex row justify-between">
        <TabsList>
          <TabsTrigger value="difficulty">{t("difficulty")}</TabsTrigger>
          <TabsTrigger value="gas">{t('gasused')}</TabsTrigger>
        </TabsList>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{t('settings')}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>{t('settings')}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  {t('blockinterval') + " " + blockInterval}
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuLabel>{t('chooseblockinterval')}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {[100, 500, 1000, 2000].map((limit) => (
                      <>
                        <DropdownMenuItem
                          key={limit}
                          onClick={async () => {
                            setBlockInterval(limit.toString());
                          }}
                        >
                          {limit + " " + t('blocks')}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-border" />
                      </>
                    ))}

                    <div className="p-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          value={blockInterval}
                          onChange={(e) =>
                            setBlockInterval(e.target.value.toString())
                          }
                          placeholder={t('custominterval')}
                          className="flex h-8 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        />
                      </div>
                    </div>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  {t('blocklimit') + " " + maxAmount}
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuLabel>{t('choseblocklimit')}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {[100, 500, 1000, 2000].map((limit) => (
                      <>
                        <DropdownMenuItem
                          key={limit}
                          onClick={async () => {
                            setmaxAmount(Number(limit));
                          }}
                        >
                          {limit + " " + t('blocks')}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-border" />
                      </>
                    ))}

                    <div className="p-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          value={maxAmount}
                          onChange={(e) => setmaxAmount(Number(e.target.value))}
                          placeholder={t('customlimit')}
                          className="flex h-8 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        />
                      </div>
                    </div>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <TabsContent value="difficulty">
        <Card>
          <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
            <div className="grid flex-1 gap-1 text-center sm:text-left">
              <CardTitle>{t('difficultymining')}</CardTitle>
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
                          <p>{t('blocknum') + " " + label}</p>
                          <p>{t('difficulty') + ": " + formatHashrate(payload[0].value)}</p>
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
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Вкладка газа */}
      <TabsContent value="gas">
        <Card>
          <CardHeader>
            <CardTitle>{t('gasusagetrans')}</CardTitle>
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
                          <p>{t('blocknum') + " " + label}</p>
                          <p>{t('gas') + " " + payload[0].value}</p>
                          <p>{t('transactions') + " " + payload[1].value}</p>
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
