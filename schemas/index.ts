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

export const CategoryBookSchema = z.object({
  category: z.string().min(1, {
    message: "Kategori buku tidak boleh kosong",
  }),
});

export const AddMemberSchema = z.object({
  studentId: z.string().min(1, {
    message: "Nomor Induk Siswa tidak boleh kosong",
  }),
  name: z.string().min(1, {
    message: "Nama tidak boleh kosong",
  }),
  class: z.string().min(1, {
    message: "Kelas tidak boleh kosong",
  }),
  phoneNumber: z.string().min(1, {
    message: "No. telepon tidak boleh kosong",
  }),
});

export const AddVisitorSchema = z.object({
  name: z.string().min(1, {
    message: "Nama tidak boleh kosong",
  }),
  date: z.date({
    required_error: "Tanggal kunjungan tidak boleh kosong",
    invalid_type_error: "Tanggal kunjungan tidak valid",
  }),
  reason: z.string().min(1, {
    message: "Alasan tidak boleh kosong",
  }),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "Nama tidak boleh kosong",
  }),
  email: z.string().email({ message: "Alamat email tidak valid" }).min(1, {
    message: "Alamat email tidak boleh kosong",
  }),
  password: z.string().min(8, {
    message: "Kata sandi minimal harus 8 karakter",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "Alamat email tidak valid" }).min(1, {
    message: "Alamat email tidak boleh kosong",
  }),
  password: z.string().min(8, {
    message: "Kata sandi minimal harus 8 karakter",
  }),
});
