"use client";

import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { ethers } from "ethers";
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

type Block = {
  number: number;
  miner: string;
  timestamp: string;
};

export const columns: ColumnDef<Block>[] = [
  {
    accessorKey: "number",
    header: "Block Number",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("number")}</div>
    ),
  },
  {
    accessorKey: "timestamp",
    header: "Timestamp",
    cell: ({ row }) => {
      const timestamp = parseInt(row.getValue("timestamp"));
      return new Date(timestamp * 1000).toLocaleString();
    },
  },
  {
    accessorKey: "miner",
    header: () => <div className="text-right">Miner</div>,
    cell: ({ row }) => {
      const miner = row.getValue("miner") as string;
      if (!miner) return null;
      return (
        <div className="text-right font-medium">{`${miner.slice(
          0,
          10
        )}...${miner.slice(-5)}`}</div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const block = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(block.number.toString())
              }
            >
              Copy block number
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(block.miner)}
            >
              Copy miner address
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() =>
                window.open(
                  `https://explorer.aplocoin.com/block/${block.number}`,
                  "_blank"
                )
              }
            >
              View in Explorer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function Info() {
  const provider = new ethers.JsonRpcProvider("https://pub1.aplocoin.com");
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [maxBlocks, setMaxBlocks] = useState(20);
  const [customBlockLimit, setCustomBlockLimit] = useState("");

  const fetchLatestBlock = useCallback(async () => {
    const latestBlockNumber = await provider.getBlockNumber();
    const block = await provider.getBlock(latestBlockNumber);
    if (block) {
      setBlocks((prevBlocks) => {
        if (prevBlocks.length && prevBlocks[0].number === block.number) {
          return prevBlocks;
        }
        const newBlock = {
          number: block.number,
          miner: block.miner,
          timestamp: block.timestamp.toString(),
        };

        const updatedBlocks = [newBlock, ...prevBlocks];
        return updatedBlocks.length > maxBlocks
          ? updatedBlocks.slice(0, maxBlocks)
          : updatedBlocks;
      });
    }
  }, [maxBlocks]);

  const fetchInitialBlocks = useCallback(async () => {
    const latestBlockNumber = await provider.getBlockNumber();
    const blockPromises = [];
    for (let i = 0; i < maxBlocks; i++) {
      blockPromises.push(provider.getBlock(latestBlockNumber - i));
    }
    const blocks = await Promise.all(blockPromises);
    const formattedBlocks = blocks
      .filter((block): block is ethers.Block => block !== null)
      .map((block) => ({
        number: block.number,
        miner: block.miner,
        timestamp: block.timestamp.toString(),
      }));
    setBlocks(formattedBlocks);
  }, [maxBlocks]);

  useEffect(() => {
    fetchInitialBlocks();
    const interval = setInterval(fetchLatestBlock, 3000);
    return () => clearInterval(interval);
  }, [maxBlocks, fetchInitialBlocks, fetchLatestBlock]);

  const table = useReactTable({
    data: blocks,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="w-full pl-4">
      <div className="flex items-center justify-end py-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Block Limit: {maxBlocks} <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Choose Block Limit</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {[100, 500, 1000, 2000].map((limit) => (
              <>
                <DropdownMenuItem
                  key={limit}
                  onClick={async () => {
                    setMaxBlocks(limit);
                    fetchInitialBlocks();
                  }}
                >
                  {limit} blocks
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-border" />
              </>
            ))}

            <div className="p-2">
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={customBlockLimit}
                  onChange={(e) => setCustomBlockLimit(e.target.value)}
                  placeholder="Custom limit"
                  className="flex h-8 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
                <Button
                  className="rounded-md border"
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    const limit = parseInt(customBlockLimit);
                    if (limit > 0) {
                      setMaxBlocks(limit);
                      fetchInitialBlocks();
                    }
                  }}
                >
                  Set
                </Button>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between space-x-2 py-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              {table.getCanPreviousPage() ? (
                <PaginationPrevious
                  onClick={() => table.previousPage()}
                  className="cursor-pointer"
                />
              ) : (
                <PaginationPrevious
                  className={cn(
                    "pointer-events-none opacity-50",
                    "text-muted-foreground"
                  )}
                />
              )}
            </PaginationItem>

            {table.getPageCount() <= 5 ? (
              // Show all pages if 5 or fewer
              [...Array(table.getPageCount())].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    onClick={() => table.setPageIndex(i)}
                    isActive={table.getState().pagination.pageIndex === i}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))
            ) : (
              <>
                <PaginationItem>
                  <PaginationLink
                    onClick={() => table.setPageIndex(0)}
                    isActive={table.getState().pagination.pageIndex === 0}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>

                {table.getState().pagination.pageIndex > 2 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}

                {table.getState().pagination.pageIndex > 1 && (
                  <PaginationItem>
                    <PaginationLink
                      onClick={() =>
                        table.setPageIndex(
                          table.getState().pagination.pageIndex - 1
                        )
                      }
                    >
                      {table.getState().pagination.pageIndex}
                    </PaginationLink>
                  </PaginationItem>
                )}

                {table.getState().pagination.pageIndex > 0 &&
                  table.getState().pagination.pageIndex <
                    table.getPageCount() - 1 && (
                    <PaginationItem>
                      <PaginationLink isActive>
                        {table.getState().pagination.pageIndex + 1}
                      </PaginationLink>
                    </PaginationItem>
                  )}

                {table.getState().pagination.pageIndex <
                  table.getPageCount() - 2 && (
                  <PaginationItem>
                    <PaginationLink
                      onClick={() =>
                        table.setPageIndex(
                          table.getState().pagination.pageIndex + 1
                        )
                      }
                    >
                      {table.getState().pagination.pageIndex + 2}
                    </PaginationLink>
                  </PaginationItem>
                )}

                {table.getState().pagination.pageIndex <
                  table.getPageCount() - 3 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}

                <PaginationItem>
                  <PaginationLink
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    isActive={
                      table.getState().pagination.pageIndex ===
                      table.getPageCount() - 1
                    }
                  >
                    {table.getPageCount()}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            <PaginationItem>
              {table.getCanNextPage() ? (
                <PaginationNext
                  onClick={() => table.nextPage()}
                  className="cursor-pointer"
                />
              ) : (
                <PaginationNext
                  className={cn(
                    "pointer-events-none opacity-50",
                    "text-muted-foreground"
                  )}
                />
              )}
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
