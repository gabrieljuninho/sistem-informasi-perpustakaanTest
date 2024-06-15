import CardWrapper from "@/common/components/auth/card-wrapper";

import LoginForm from "@/common/components/auth/login-form";

const LoginPage = () => {
  return (
    <CardWrapper
      headerLabel="Selamat datang"
      headerDescription="Silahkan isi data untuk masuk ke akun Anda."
      backButtonLabel="Belum punya akun?"
      backButtonHref="/"
    >
      <LoginForm />
    </CardWrapper>
  );
};

export default LoginPage;
