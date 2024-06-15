import CardWrapper from "@/common/components/auth/card-wrapper";

import RegisterForm from "@/common/components/auth/register-form";

const RegisterPage = () => {
  return (
    <CardWrapper
      headerLabel="Selamat datang"
      headerDescription="Silahkan isi data untuk mendaftar akun Anda."
      backButtonLabel="Sudah punya akun?"
      backButtonHref="/login"
    >
      <RegisterForm />
    </CardWrapper>
  );
};

export default RegisterPage;
