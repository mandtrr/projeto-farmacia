import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function AvaliacoesArquivadas({ avaliacoes = [] }) {
    return (
        <AdminLayout>
            <Head title="Avaliações Arquivadas" />

            <div className="p-6 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Avaliações Arquivadas
                </h1>

                {/* Verifica se há avaliações */}
                {avaliacoes.length === 0 ? (
                    <p className="text-gray-600">Nenhuma avaliação arquivada no momento.</p>
                ) : (
                    <div className="bg-white p-6 shadow rounded-md">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="p-3 text-left">Cliente</th>
                                    <th className="p-3 text-left">Data</th>
                                    <th className="p-3 text-left">Nota</th>
                                    <th className="p-3 text-left">Comentário</th>
                                    <th className="p-3 text-center">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {avaliacoes.map((avaliacao) => (
                                    <tr key={avaliacao.id} className="border-b">
                                        <td className="p-3">{avaliacao.cliente}</td>
                                        <td className="p-3">{avaliacao.data}</td>
                                        <td className="p-3 text-center">{avaliacao.nota}</td>
                                        <td className="p-3">{avaliacao.comentario}</td>
                                        <td className="p-3 text-center flex justify-center space-x-2">
                                            <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                                                Restaurar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
