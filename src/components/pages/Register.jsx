import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Register:", formData);
    alert("Registrasi berhasil! (Simulasi)");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      {/* Card Pendaftaran Akun */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        {/* Header Card */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Pendaftaran Akun</h2>
          <p className="text-gray-500 text-sm mt-1">
            Yuk, mulai belajar interaktif bersama VideoBelajar!
          </p>
        </div>

        {/* Form Pendaftaran */}
        <form onSubmit={handleSubmit}>
          <InputField
            label="Nama Lengkap"
            name="fullName"
            placeholder="Masukkan nama lengkap Anda"
            value={formData.fullName}
            onChange={handleChange}
          />

          <InputField
            label="E-mail"
            type="email"
            name="email"
            placeholder="contoh@email.com"
            value={formData.email}
            onChange={handleChange}
          />

          <InputField
            label="No. HP"
            type="tel"
            name="phone"
            placeholder="08xxxxxxxxxx"
            value={formData.phone}
            onChange={handleChange}
          />

          <InputField
            label="Kata Sandi"
            type="password"
            name="password"
            placeholder="Masukkan kata sandi"
            value={formData.password}
            onChange={handleChange}
          />

          {/* Tombol Daftar */}
          <div className="mt-6">
            <Button type="submit" variant="secondary">
              Daftar
            </Button>

            {/* Tombol SSO (Google) */}
            <Button
              variant="sso"
              onClick={() => alert("Daftar lewat Google (Simulasi)")}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Daftar dengan Google
            </Button>
          </div>
        </form>

        {/* Footer Card */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Sudah punya akun?{" "}
          <a
            href="#login"
            className="text-orange-500 font-semibold hover:underline"
          >
            Masuk di sini
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
