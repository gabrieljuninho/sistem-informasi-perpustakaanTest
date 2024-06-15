/* eslint-disable indent */

"use client";

import * as React from "react";

import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { IVisitorProps } from "@/common/types/visitor";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import OtherForm from "@/common/components/data-buku/other-form";
import AddVisitorForm from "@/common/components/data-pengunjung/add-visitor-form";

const data: IVisitorProps[] = [
  {
    id: 1,
    visitorName: "Gabriel Juninho Paulista",
    visitorDate: "27 Juni 2024",
    reason: "Istirahat",
  },
  {
    id: 2,
    visitorName: "Andi Alfian",
    visitorDate: "27 Juni 2024",
    reason: "Istirahat",
  },
  {
    id: 3,
    visitorName: "Trisna",
    visitorDate: "27 Juni 2024",
    reason: "Istirahat",
  },
  {
    id: 4,
    visitorName: "Melly Christina",
    visitorDate: "27 Juni 2024",
    reason: "Istirahat",
  },
  {
    id: 5,
    visitorName: "Christin Magdalena",
    visitorDate: "27 Juni 2024",
    reason: "Istirahat",
  },
  {
    id: 6,
    visitorName: "Siti Sapiroh",
    visitorDate: "27 Juni 2024",
    reason: "Istirahat",
  },
];

export const columns: ColumnDef<IVisitorProps>[] = [
  {
    accessorKey: "visitorName",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          className="bg-transparent px-0 hover:no-underline"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama Pengunjung
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("visitorName")}</div>
    ),
  },
  {
    accessorKey: "visitorDate",
    header: "Tanggal Kunjungan",
    cell: ({ row }) => <div>{row.getValue("visitorDate")}</div>,
  },
  {
    accessorKey: "reason",
    header: "Keperluan",
    cell: ({ row }) => <div>{row.getValue("reason")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.visitorName)}
            >
              Copy book ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function DataTableDemo() {
  const [searchBy, setSearchBy] = React.useState("visitorName");
  const [searchText, setSearchText] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    table.getColumn(searchBy)?.setFilterValue(event.target.value);
  };

  const handleSelectChange = (value: string) => {
    setSearchBy(value);
    setSearchText("");
    table.getColumn(value)?.setFilterValue("");
  };

  return (
    <Tabs defaultValue="data">
      <TabsList className="flex w-max items-center justify-start">
        <TabsTrigger value="data">Data Pengunjung</TabsTrigger>
        <TabsTrigger value="add">Tambah Pengunjung</TabsTrigger>
        <TabsTrigger value="other">Lainnya</TabsTrigger>
      </TabsList>
      <TabsContent value="data">
        <div className="w-full">
          <div className="flex items-center py-4">
            <div className="flex items-center justify-start gap-4">
              <Input
                placeholder="Cari pengunjung..."
                value={searchText}
                onChange={handleSearchChange}
                className="min-w-80"
              />
              <Select
                defaultValue="visitorName"
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="w-[270px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="visitorName">Nama</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="rounded-md border">
            <ScrollArea>
              <Table>
                <TableHeader className="whitespace-nowrap">
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
                          <TableCell
                            key={cell.id}
                            className="whitespace-nowrap"
                          >
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
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="add" className="py-4">
        <AddVisitorForm />
      </TabsContent>
      <TabsContent value="other" className="py-4">
        <OtherForm />
      </TabsContent>
    </Tabs>
  );
}
