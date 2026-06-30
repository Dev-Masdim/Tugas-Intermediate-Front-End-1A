import React, { useState } from "react";
import InputField from "../InputField";
import Button from "../Button";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    console.log("Data Login:", formData);
    alert("Login berhasil! (Simulasi)");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      {/* Card Login */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        {/* Header Card */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Masuk ke Akun</h2>
          <p className="text-gray-500 text-sm mt-1">
            Selamat datang kembali! Yuk, lanjutkan belajarmu.
          </p>
        </div>

        {/* Form Login */}
        <form onSubmit={handleSubmit}>
          <InputField
            label="E-mail"
            type="email"
            name="email"
            placeholder="contoh@email.com"
            value={formData.email}
            onChange={handleChange}
          />

          <div className="mb-1">
            <InputField
              label="Kata Sandi"
              type="password"
              name="password"
              placeholder="Masukkan kata sandi"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Fitur Tambahan: Temukan password/Remember me */}
          <div className="flex items-center justify-between mb-6 text-sm">
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                className="mr-2 rounded text-orange-500 focus:ring-orange-500"
              />
              Ingat Saya
            </label>
            <a href="#forgot" className="text-orange-500 hover:underline">
              Lupa Kata Sandi?
            </a>
          </div>

          {/* Tombol Masuk */}
          <div>
            <Button type="submit" variant="secondary">
              Masuk
            </Button>

            {/* Tombol SSO (Google) */}
            <Button
              variant="sso"
              onClick={() => alert("Masuk lewat Google (Simulasi)")}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Masuk dengan Google
            </Button>
          </div>
        </form>

        {/* Footer Card */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Belum punya akun?{" "}
          <a
            href="#register"
            className="text-orange-500 font-semibold hover:underline"
          >
            Daftar di sini
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
