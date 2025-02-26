import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";


export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };

  return (
    <div className="flex min-h-screen">
      {/* Lado esquerdo com fundo escuro e frase */}
      <div className="w-1/2 bg-gray-900 text-white flex flex-col justify-center items-center p-12">
        <h1 className="text-3xl font-bold">Farmácia Num Clique</h1>
        <p className="mt-6 text-lg text-center max-w-md">
          “An entrepreneur’s success does not come from perfect prediction, but
          from rapid adaptation to the unpredictable.”
        </p>
        <p className="mt-2 text-gray-400 text-base">— Nassim Nicholas Taleb</p>
      </div>

      {/* Lado direito - Formulário de Login */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <Head title="Login" />
        <div className="w-full max-w-md p-6">
          <form onSubmit={submit}>
            {/* Campo de Email */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#533363] placeholder-gray-500"
                placeholder="Email"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Campo de Senha */}
            <div className="mb-6">
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#533363] placeholder-gray-500"
                placeholder="Senha"
                required
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Botão de Login com cor do lado esquerdo */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition"
              disabled={processing}
            >
              {processing ? "Entrando..." : "Entrar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
