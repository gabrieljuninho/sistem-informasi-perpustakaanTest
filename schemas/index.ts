import * as z from "zod";

export const AddBookSchema = z.object({
  bookId: z
    .string()
    .min(1, {
      message: "Kode buku tidak boleh kosong",
    })
    .optional(),
  category: z.string().min(1, {
    message: "Kategori tidak boleh kosong",
  }),
  bookTitle: z.string().min(1, {
    message: "Judul buku tidak boleh kosong",
  }),
  authors: z
    .array(
      z.object({
        name: z.string().min(1, {
          message: "Penulis tidak boleh kosong",
        }),
      })
    )
    .min(1, {
      message: "Setidaknya harus ada satu penulis",
    }),
  publisher: z
    .string()
    .min(1, {
      message: "Penerbit tidak boleh kosong",
    })
    .optional(),
  publicationYear: z
    .number()
    .min(1, {
      message: "Tahun Terbit tidak boleh kosong",
    })
    .optional(),
  totalBook: z.number().min(1, {
    message: "Total buku tidak boleh kosong",
  }),
});

export const CategoryBook = z.object({
  category: z.string().min(1, {
    message: "Kategori buku tidak boleh kosong",
  }),
});