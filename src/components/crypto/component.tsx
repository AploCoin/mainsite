"use client";

import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { AreaChart, Area, CartesianGrid, XAxis, Tooltip, Bar, BarChart } from "recharts";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

// Форматирование сложности
function formatHashrate(difficulty: bigint): string {
    const units = ["H/s", "KH/s", "MH/s", "GH/s", "TH/s", "PH/s"];
    let value = Number(difficulty);
    let unitIndex = 0;

    while (value >= 1000 && unitIndex < units.length - 1) {
        value /= 1000;
        unitIndex++;
    }

    return `${value.toFixed(2)} ${units[unitIndex]}`;
}

const BlockExplorer = () => {
    const [blocks, setBlocks] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlocks = async () => {
            const provider = new ethers.JsonRpcProvider("https://pub1.aplocoin.com");
            const currentBlockNumber = await provider.getBlockNumber();
            const fetchedBlocks = [];

            for (let i = 0; i < 50; i++) {
                const blockNumber = currentBlockNumber - i;
                const block = await provider.getBlock(blockNumber);
                if (block) {
                    fetchedBlocks.push({
                        number: block.number,
                        difficulty: block.difficulty,
                        gasUsed: block.gasUsed.toString(),
                        transactions: block.transactions.length,
                    });
                }
            }
            setBlocks(fetchedBlocks.reverse());
            setLoading(false);
        };

        fetchBlocks();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    // Данные для графиков
    const difficultyData = blocks.map((block) => ({
        name: `#${block.number}`,
        difficulty: Number(block.difficulty),
    }));

    const gasData = blocks.map((block) => ({
        name: `#${block.number}`,
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
                    <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
                        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                            <CardTitle>Сложность майнинга</CardTitle>

                        </div>
                    </CardHeader>
                    <CardContent className="px-2 sm:p-6">
                        <div className="aspect-auto h-[400px] w-full">
                            <BarChart
                                width={800}
                                height={400}
                                data={difficultyData}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                                onClick={(e) => {
                                    if (e && e.activeLabel) {
                                        const blockId = e.activeLabel.replace("#", "");
                                        window.open(`https://explorer.aplocoin.com/block/${blockId}`);
                                    }
                                }}
                            >
                                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="name"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    minTickGap={32}
                                />
                                <Tooltip
                                    content={({ active, payload, label }) => {
                                        if (active && payload && payload.length) {
                                            return (
                                                <div className="bg-background p-2 rounded-lg border">
                                                    <p>Блок: {label}</p>
                                                    <p>Сложность: {payload[0].value}</p>
                                                </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                                <Bar
                                    dataKey="difficulty"
                                    fill="var(--primary)"
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </div>
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
                            <Area type="monotone" dataKey="gasUsed" stroke="#82ca9d" fill="#82ca9d" />
                            <Area type="monotone" dataKey="transactions" stroke="#ffc658" fill="#ffc658" />
                        </AreaChart>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
};

export default BlockExplorer;
