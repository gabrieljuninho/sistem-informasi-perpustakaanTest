import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Minus, Plus } from "lucide-react";

import * as z from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { AddBookSchema } from "@/schemas";

const AddBookForm = () => {
  const form = useForm<z.infer<typeof AddBookSchema>>({
    resolver: zodResolver(AddBookSchema),
    defaultValues: {
      bookId: "",
      category: "",
      bookTitle: "",
      authors: [{ name: "" }],
      publisher: "",
      publicationYear: 0,
      totalBook: 0,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "authors",
  });

  const onSubmit = (values: z.infer<typeof AddBookSchema>) => {
    console.log(values);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tambah Buku</CardTitle>
        <CardDescription>
          Isilah dengan benar sesuai dengan data yang terdapat pada buku.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="basis-4/6">
                  <FormField
                    control={form.control}
                    name="bookId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Kode Buku</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="123456789"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="basis-2/6">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Kategori</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih kategori" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">
                                  Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">
                                  Pineapple
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormField
                control={form.control}
                name="bookTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Judul Buku</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Habis Gelap Terbitlah Terang"
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-4">
                {fields.map((field, index) => (
                  <div key={field.id} className="space-y-4">
                    <FormField
                      control={form.control}
                      name={`authors.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          {index === 0 && <FormLabel>Penulis</FormLabel>}
                          <div className="flex w-full items-center gap-4">
                            <FormControl>
                              <Input
                                {...field}
                                placeholder={
                                  index === 0
                                    ? "R.A Kartini"
                                    : `Penulis ${index + 1}`
                                }
                                autoComplete="off"
                              />
                            </FormControl>
                            {index === 0 ? (
                              <Button
                                type="button"
                                variant="ghost"
                                className="px-3 py-2"
                                onClick={() => append({ name: "" })}
                              >
                                <Plus className="h-4 w-4 text-primary" />
                              </Button>
                            ) : (
                              <Button
                                type="button"
                                variant="ghost"
                                className="px-3 py-2"
                                onClick={() => remove(index)}
                              >
                                <Minus className="h-4 w-4 text-primary" />
                              </Button>
                            )}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                ))}
              </div>
              <FormField
                control={form.control}
                name="publisher"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Penerbit</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Penerbit Erlangga"
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-4">
                <div className="basis-1/2">
                  <FormField
                    control={form.control}
                    name="publicationYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tahun Terbit</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="2002"
                            onChange={(e) =>
                              field.onChange(
                                e.target.value === ""
                                  ? undefined
                                  : parseInt(e.target.value)
                              )
                            }
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="basis-1/2">
                  <FormField
                    control={form.control}
                    name="totalBook"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Jumlah Buku</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="1"
                            onChange={(e) =>
                              field.onChange(
                                e.target.value === ""
                                  ? undefined
                                  : parseInt(e.target.value)
                              )
                            }
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <CardFooter className="p-0">
              <Button type="submit">Tambah Buku</Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddBookForm;
