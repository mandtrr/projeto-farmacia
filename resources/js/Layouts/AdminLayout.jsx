import React from "react";
import { Link, useForm } from "@inertiajs/react";
import { FaClipboardList, FaChartPie, FaFileArchive, FaUser, FaSignOutAlt } from "react-icons/fa";

export default function AdminLayout({ children }) {
  const { post } = useForm(); // Hook para logout

  const handleLogout = (e) => {
    e.preventDefault();
    post(route("logout"));
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-100">
      {/* Sidebar fixa cobrindo toda a altura */}
      <aside className="w-64 fixed top-0 left-0 h-screen bg-white shadow-md flex flex-col">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-700 mb-3 ml-3">Administração</h2>
          <nav className="space-y-2">
            <Link
              href={route("admin.dashboard")}
              className={`flex items-center px-4 py-2 rounded-md ${
                route().current("admin.dashboard") ? "text-black font-bold bg-gray-200" : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              <FaChartPie className="mr-2" />
              Dashboard
            </Link>

            <Link
              href={route("admin.avaliacoes")}
              className={`flex items-center px-4 py-2 rounded-md ${
                route().current("admin.avaliacoes") ? "text-black font-bold bg-gray-200" : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              <FaClipboardList className="mr-2" />
              Avaliações Pendentes
            </Link>

            <Link
              href={route("admin.arquivadas")}
              className={`flex items-center px-4 py-2 rounded-md ${
                route().current("admin.arquivadas") ? "text-black font-bold bg-gray-200" : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              <FaFileArchive className="mr-2" />
              Avaliações Arquivadas
            </Link>

            <Link
              href={route("profile.edit")}
              className={`flex items-center px-4 py-2 rounded-md ${
                route().current("profile.edit") ? "text-black font-bold bg-gray-200" : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              <FaUser className="mr-2" />
              Perfil
            </Link>
          </nav>
        </div>

        {/* Botão de Logout fixado exatamente no final do menu */}
        <form onSubmit={handleLogout} className="mt-auto p-4">
          <button type="submit" className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-100 rounded-md">
            <FaSignOutAlt className="mr-2" />
            Sair
          </button>
        </form>
      </aside>

      {/* Conteúdo Principal ajustado para não sobrepor o menu */}
      <main className="flex-1 p-6 ml-64 overflow-auto">{children}</main>
    </div>
  );
}
