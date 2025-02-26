import React, { useState } from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa"; // Adicionado o ícone de check real
import { Head } from "@inertiajs/react";

export default function Avaliacao() {
  const [avaliacao, setAvaliacao] = useState(0);
  const [hoverAvaliacao, setHoverAvaliacao] = useState(null); // Correção do erro
  const [palavrasChaveSelecionadas, setPalavrasChaveSelecionadas] = useState([]);
  const [comentario, setComentario] = useState("");

  const palavrasChave = ["Muito bom", "Entrega rápida", "Produto correto", "Ótimo atendimento", "Preço justo"];

  const handleAvaliacao = (nota) => {
    setAvaliacao(nota);
  };

  const togglePalavraChave = (palavra) => {
    setPalavrasChaveSelecionadas((prev) =>
      prev.includes(palavra) ? prev.filter((p) => p !== palavra) : [...prev, palavra]
    );
  };

  const handleSubmit = () => {
    console.log({
      avaliacao,
      palavrasChaveSelecionadas,
      comentario,
    });
    alert("Avaliação enviada!");
  };

  return (
    <div className="bg-[#f8f8fa] min-h-screen flex flex-col items-center justify-center">
      <Head title="Avaliação" />

      {/* LOGO DA FARMÁCIA */}
      <div className="flex justify-center mb-4">
        <img 
          src="/images/logo.png" 
          alt="Farmácia Num Clique" 
          className="w-40 md:w-48 lg:w-56" // Ajuste proporcional
        />
      </div>

      {/* CAIXA DE AVALIAÇÃO */}
      <div className="bg-white p-6 shadow-lg rounded-md max-w-lg w-full">
        
        {/* Pedido Concluído com Ícone */}
        <div className="flex items-center justify-center text-green-600 font-bold text-xl mb-1">
          <FaCheckCircle className="mr-2" /> Pedido concluído
        </div>
        <p className="text-gray-600 text-sm mb-4 text-center">28/01/2025 às 16:42</p>

        {/* Produtos Comprados */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Produtos comprados:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Produto 1 </li>
            <li>Produto 2 </li>
            <li>Produto 3 </li>
          </ul>
        </div>

        {/* Avaliação - Agora com efeito de hover */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Avaliação</h3>
          <div className="flex space-x-2 mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer text-2xl transition ${
                  star <= (hoverAvaliacao || avaliacao) ? "text-yellow-400" : "text-gray-300"
                }`}
                onMouseEnter={() => setHoverAvaliacao(star)}
                onMouseLeave={() => setHoverAvaliacao(null)}
                onClick={() => handleAvaliacao(star)}
              />
            ))}
          </div>
        </div>

        {/* Palavras-chave - Agora alinhadas à esquerda */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Como foi sua experiência?</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {palavrasChave.map((palavra) => (
              <button
                key={palavra}
                onClick={() => togglePalavraChave(palavra)}
                className={`px-3 py-1 rounded-md border ${
                  palavrasChaveSelecionadas.includes(palavra)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {palavra}
              </button>
            ))}
          </div>
        </div>

        {/* Comentário */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Deixe um comentário:</h3>
          <textarea
            className="w-full border rounded-md p-2 mt-2"
            placeholder="Escreva sua opinião..."
            rows="3"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
        </div>

        {/* Botão de Submeter */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#533363] text-white py-2 rounded-md hover:bg-[#432653] transition"
        >
          Enviar Avaliação
        </button>
      </div>
    </div>
  );
}
