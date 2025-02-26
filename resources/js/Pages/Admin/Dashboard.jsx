import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, usePage } from "@inertiajs/react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar os componentes do ChartJS
ChartJS.register(LineElement, BarElement, ArcElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

export default function Dashboard({ avaliacoes = [] }) {
  const { auth } = usePage().props;
  const userName = auth.user?.name || "Usuário";

  // Obter a data formatada (ex: 22 de Fevereiro de 2025)
  const dataAtual = new Date();
  const opcoesFormato = { day: "2-digit", month: "long", year: "numeric" };
  const dataFormatada = dataAtual.toLocaleDateString("pt-BR", opcoesFormato);

  if (avaliacoes.length === 0) {
    avaliacoes = [
      { data: "Jan", total: 15, positivas: 10, negativas: 2, neutras: 3 },
      { data: "Fev", total: 20, positivas: 15, negativas: 3, neutras: 2 },
      { data: "Mar", total: 12, positivas: 8, negativas: 2, neutras: 2 },
      { data: "Abr", total: 18, positivas: 14, negativas: 3, neutras: 1 },
      { data: "Mai", total: 25, positivas: 20, negativas: 4, neutras: 1 },
    ];
  }

  // **Gráfico de Linhas** - Avaliações nos últimos 90 dias (CINZA ESCURO)
  const lineChartData = {
    labels: avaliacoes.map((a) => a.data),
    datasets: [
      {
        label: "Avaliações nos últimos 90 dias",
        data: avaliacoes.map((a) => a.total),
        borderColor: "#4B5563", // Cinza Escuro
        backgroundColor: "rgba(75, 85, 99, 0.2)", // Cinza Escuro Transparente
        fill: true,
      },
    ],
  };

  // **Gráfico de Barras** - Avaliações por Mês (CINZA ESCURO)
  const barChartData = {
    labels: avaliacoes.map((a) => a.data),
    datasets: [
      {
        label: "Avaliações",
        data: avaliacoes.map((a) => a.total),
        backgroundColor: "#4B5563", // Cinza Escuro
      },
    ],
  };

  // **Gráfico de Pizza** - Proporção de Avaliações (CORES MAIS NEUTRAS)
  const pieChartData = {
    labels: ["Positivas", "Negativas", "Neutras"],
    datasets: [
      {
        data: [
          avaliacoes.reduce((sum, a) => sum + a.positivas, 0),
          avaliacoes.reduce((sum, a) => sum + a.negativas, 0),
          avaliacoes.reduce((sum, a) => sum + a.neutras, 0),
        ],
        backgroundColor: ["#60A5FA", "#9CA3AF", "#D1D5DB"], // Azul Claro, Cinza Médio, Bege
      },
    ],
  };

  return (
    <AdminLayout>
      <Head title="Dashboard" />

      <div className="p-6 bg-gray-100 min-h-screen">
        {/* Header com Bem-vindo e Data */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Bem-vindo(a), {userName}
          </h1>
          <span className="text-base text-gray-600">{dataFormatada}</span>
        </div>

        {/* Cards de Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow-md p-6 rounded-md">
            <h2 className="text-lg font-semibold text-gray-700">Total de Avaliações</h2>
            <p className="text-3xl font-bold text-[#4B5563]">250</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-md">
            <h2 className="text-lg font-semibold text-gray-700">Pendentes de Aprovação</h2>
            <p className="text-3xl font-bold text-yellow-500">15</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-md">
            <h2 className="text-lg font-semibold text-gray-700">Aprovadas</h2>
            <p className="text-3xl font-bold text-green-500">235</p>
          </div>
        </div>

        {/* Gráficos - Agora com as novas cores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Gráfico de Linhas */}
          <div className="bg-white p-6 shadow-md rounded-md flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 text-center">
              Avaliações nos últimos 90 dias
            </h2>
            <div className="w-full h-80">
              <Line data={lineChartData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>

          {/* Gráfico de Barras */}
          <div className="bg-white p-6 shadow-md rounded-md flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 text-center">
              Avaliações por Mês
            </h2>
            <div className="w-full h-80">
              <Bar data={barChartData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>

          {/* Gráfico de Pizza */}
          <div className="bg-white p-6 shadow-md rounded-md flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 text-center">
              Distribuição de Avaliações
            </h2>
            <div className="w-72 h-72">
              <Pie data={pieChartData} />
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
