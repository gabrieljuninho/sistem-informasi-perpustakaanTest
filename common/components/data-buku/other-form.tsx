import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { CategoryBook } from "@/schemas";

const OtherForm = () => {
  const form = useForm<z.infer<typeof CategoryBook>>({
    resolver: zodResolver(CategoryBook),
    defaultValues: {
      category: "",
    },
  });

  const onSubmit = (values: z.infer<typeof CategoryBook>) => {
    console.log(values);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kategori Buku</CardTitle>
        <CardDescription>
          Isilah dengan benar sesuai dengan isi dan judul yang terdapat pada
          buku.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kategori Buku</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Edukasi" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CardFooter className="p-0">
              <Button type="submit">Tambah Kategori</Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default OtherForm;
