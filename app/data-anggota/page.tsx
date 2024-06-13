/* eslint-disable indent */

"use client";

import * as React from "react";

import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { IMemberProps } from "@/common/types/member";

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
import AddMemberForm from "@/common/components/data-anggota/add-member-form";

const data: IMemberProps[] = [
  {
    id: 1,
    studentId: "1357924680",
    name: "Gabriel Juninho Paulista",
    class: "X IPS 1",
    phoneNumber: "123456789",
  },
  {
    id: 2,
    studentId: "0864297531",
    name: "Andi Alfian",
    class: "X IPS 2",
    phoneNumber: "123456789",
  },
  {
    id: 3,
    studentId: "12457890",
    name: "Trisna",
    class: "X IPS 3",
    phoneNumber: "123456789",
  },
  {
    id: 4,
    studentId: "0976431",
    name: "Melly Christina",
    class: "X IPS 4",
    phoneNumber: "123456789",
  },
  {
    id: 5,
    studentId: "12903478",
    name: "Christin Magdalena",
    class: "XI IPS 1",
    phoneNumber: "123456789",
  },
  {
    id: 6,
    studentId: "12785432",
    name: "Siti Sapiroh",
    class: "XI IPS 2",
    phoneNumber: "123456789",
  },
];

export const columns: ColumnDef<IMemberProps>[] = [
  {
    accessorKey: "studentId",
    header: "Nomor Induk Siswa",
    cell: ({ row }) => <div>{row.getValue("studentId")}</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          className="bg-transparent px-0 hover:no-underline"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama Siswa
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "class",
    header: "Kelas",
    cell: ({ row }) => <div>{row.getValue("class")}</div>,
  },
  {
    accessorKey: "phoneNumber",
    header: "No. Telepon",
    cell: ({ row }) => <div>{row.getValue("phoneNumber")}</div>,
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
              onClick={() => navigator.clipboard.writeText(payment.name)}
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
  const [searchBy, setSearchBy] = React.useState("name");
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
        <TabsTrigger value="data">Data Anggota</TabsTrigger>
        <TabsTrigger value="add">Tambah Anggota</TabsTrigger>
        <TabsTrigger value="other">Lainnya</TabsTrigger>
      </TabsList>
      <TabsContent value="data">
        <div className="w-full">
          <div className="flex items-center py-4">
            <div className="flex items-center justify-start gap-4">
              <Input
                placeholder="Cari anggota..."
                value={searchText}
                onChange={handleSearchChange}
                className="min-w-80"
              />
              <Select defaultValue="name" onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[270px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="studentId">Nomor Induk Siswa</SelectItem>
                    <SelectItem value="name">Nama</SelectItem>
                    <SelectItem value="class">Kelas</SelectItem>
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
        <AddMemberForm />
      </TabsContent>
      <TabsContent value="other" className="py-4">
        <OtherForm />
      </TabsContent>
    </Tabs>
  );
}
