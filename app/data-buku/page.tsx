/* eslint-disable indent */

"use client";

import * as React from "react";

import { ArrowUpDown, ChevronDown, Filter, MoreHorizontal } from "lucide-react";

import { IBookProps } from "@/common/types/book";

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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
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
import AddBookForm from "@/common/components/data-buku/add-book-form";

const data: IBookProps[] = [
  {
    id: 1,
    bookId: "978-979-794-532-9",
    bookTitle: "True Stalker",
    category: "Percintaan",
    author: "Sirhayani",
    publisher: "Mediakita",
    publicationYear: 2017,
    quantity: 1,
  },
  {
    id: 2,
    bookId: "9876021779317",
    bookTitle: "Rindu Keabadian",
    category: "Edukasi",
    author: "Ahmad Zacky Siradj",
    publisher: "DQ Publishing",
    publicationYear: 2022,
    quantity: 1,
  },
  {
    id: 3,
    bookId: "978-623-289-095-4",
    bookTitle: "Tulisan Sastra",
    category: "Pelajaran",
    author: "Tenderlova",
    publisher: "CV. RinMedia",
    publicationYear: 2020,
    quantity: 1,
  },
  {
    id: 4,
    bookId: "978-979-22-8004-3",
    bookTitle: "Negeri 5 Menara",
    category: "Dongeng",
    author: "A. Fuadi",
    publisher: "PT Gramedia Pustaka Utama",
    publicationYear: 2009,
    quantity: 1,
  },
  {
    id: 5,
    bookId: "979-22-0191-2",
    bookTitle:
      "Kumpulan Kisah Nyata tentang Hubungan yang Serasi yang Membangkitkan Inspirasi",
    category: "Sosial dan Budaya",
    author: "John Gray, Ph. D.",
    publisher: "PT Gramedia Pustaka Utama",
    publicationYear: 2006,
    quantity: 1,
  },
];

export const columns: ColumnDef<IBookProps>[] = [
  {
    accessorKey: "bookId",
    header: "Kode Buku",
    cell: ({ row }) => <div>{row.getValue("bookId")}</div>,
  },
  {
    accessorKey: "bookTitle",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          className="bg-transparent px-0 hover:no-underline"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Judul Buku
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("bookTitle")}</div>
    ),
  },
  {
    accessorKey: "category",
    header: "Kategori",
    cell: ({ row }) => <div>{row.getValue("category")}</div>,
  },
  {
    accessorKey: "author",
    header: "Penulis",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("author")}</div>
    ),
  },
  {
    accessorKey: "publisher",
    header: "Penerbit",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("publisher")}</div>
    ),
  },
  {
    accessorKey: "publicationYear",
    header: "Tahun Terbit",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("publicationYear")}</div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Jumlah",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("quantity")}</div>
    ),
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
              onClick={() => navigator.clipboard.writeText(payment.bookId)}
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
  const [searchBy, setSearchBy] = React.useState("bookTitle");
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
        <TabsTrigger value="data">Data Buku</TabsTrigger>
        <TabsTrigger value="add">Tambah Buku</TabsTrigger>
        <TabsTrigger value="other">Lainnya</TabsTrigger>
      </TabsList>
      <TabsContent value="data">
        <div className="w-full">
          <div className="flex items-center py-4">
            <div className="flex items-center justify-start gap-4">
              <Input
                placeholder="Cari buku..."
                value={searchText}
                onChange={handleSearchChange}
                className="min-w-80"
              />
              <Select
                defaultValue="bookTitle"
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="bookId">Kode Buku</SelectItem>
                    <SelectItem value="bookTitle">Judul Buku</SelectItem>
                    <SelectItem value="category">Kategori</SelectItem>
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
        <AddBookForm />
      </TabsContent>
      <TabsContent value="other" className="py-4">
        <OtherForm />
      </TabsContent>
    </Tabs>
  );
}
