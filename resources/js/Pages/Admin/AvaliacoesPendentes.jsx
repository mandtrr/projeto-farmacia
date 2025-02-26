import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { CheckCircle, Archive, Trash2 } from "lucide-react";

export default function AvaliacoesPendentes() {
  // Simulação de avaliações pendentes
  const avaliacoes = [
    {
      id: 1,
      nome: "Amanda Costa",
      data: "25/02/2025",
      nota: 5,
      comentario: "Ótimo atendimento! Entrega super rápida!",
    },
    {
      id: 2,
      nome: "Bruno Silva",
      data: "24/02/2025",
      nota: 4,
      comentario: "Gostei bastante, só demorou um pouco para chegar.",
    },
    {
      id: 3,
      nome: "Carla Souza",
      data: "23/02/2025",
      nota: 3,
      comentario: "Atendimento bom, mas esperava mais do produto.",
    },
  ];

  return (
    <AdminLayout>
      <Head title="Avaliações Pendentes" />

      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Avaliações Pendentes
        </h1>

        {/* Tabela de Avaliações Pendentes */}
        <div className="bg-white p-6 shadow-md rounded-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3 text-left">Cliente</th>
                <th className="p-3 text-left">Data</th>
                <th className="p-3 text-center">Nota</th>
                <th className="p-3 text-left">Comentário</th>
                <th className="p-3 text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {avaliacoes.map((avaliacao) => (
                <tr
                  key={avaliacao.id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="p-3">{avaliacao.nome}</td>
                  <td className="p-3">{avaliacao.data}</td>
                  <td className="p-3 text-center text-lg font-semibold">
                    {avaliacao.nota} ⭐
                  </td>
                  <td className="p-3">{avaliacao.comentario}</td>
                  <td className="p-3 text-center flex justify-center gap-3">
                    {/* Botão de Aprovar */}
                    <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition">
                      <CheckCircle size={18} className="inline-block mr-1" />
                      Aprovar
                    </button>

                    {/* Botão de Arquivar */}
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition">
                      <Archive size={18} className="inline-block mr-1" />
                      Arquivar
                    </button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
