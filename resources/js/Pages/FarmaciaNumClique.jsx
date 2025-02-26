import React, { useState } from "react";
import { FaSearch, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaPhone, FaUser, FaFileAlt, FaChevronDown } from "react-icons/fa"; // Ícones

export default function FarmaciaNumClique() {
    const [selectedStars, setSelectedStars] = useState(null);
    const [orderBy, setOrderBy] = useState("relevancia");
    const [showFilter, setShowFilter] = useState(false);
    const [showOrderBy, setShowOrderBy] = useState(false);

    return (
        <div className="bg-[#f8f8fa] min-h-screen flex flex-col">
            {/* TOPO FIXO */}
            <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img src="/images/logo.png" alt="Farmácia Num Clique" className="w-50 h-16" />
                        <div>
                            <h1 className="text-2xl font-bold">
                                <a href="https://farmacianumclique.pt" target="_blank" rel="noopener noreferrer" className="text-[#533363] hover:underline">
                                    Farmácia Num Clique
                                </a>
                            </h1>
                            <p className="text-gray-600 text-sm">
                                <strong>Opiniões:</strong> 98 avaliações nos últimos 12 meses | 99 avaliações no total
                            </p>
                            <div className="flex items-center space-x-2 mt-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, index) => (
                                        <span key={index} className={`text-2xl ${index < 4 ? "text-yellow-400" : "text-gray-300"}`}>
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <span className="text-lg font-bold">4,89</span>
                                <span className="text-gray-600">Muito bom</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* CONTEÚDO DA PÁGINA - Margem maior para evitar sobreposição da header fixa */}
            <div className="max-w-6xl mx-auto pt-32 p-6 mt-7">
                {/* FILTROS E ORDENAÇÃO */}
                <div className="flex flex-col md:flex-row items-center justify-start my-6 space-x-4">
                    {/* Campo de Pesquisa */}
                    <div className="relative w-full md:w-1/3">
                        <input
                            type="text"
                            placeholder="Pesquisar por palavra-chave"
                            className="pl-10 pr-4 py-2 border rounded-md w-full"
                        />
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>

                    {/* Botão de Filtros */}
                    <div className="relative">
                        <button onClick={() => setShowFilter(!showFilter)} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                        Filtros <FaChevronDown className="inline ml-1" />
                        </button>
                        {showFilter && (
                            <div className="absolute bg-white shadow-lg rounded-md p-3 mt-1 w-48 z-10">
                                <h3 className="font-semibold">Avaliação</h3>
                                {[5, 4, 3, 2, 1].map((star) => (
                                    <div
                                        key={star}
                                        className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
                                        onClick={() => setSelectedStars(star)}
                                    >
                                        <input type="checkbox" checked={selectedStars === star} readOnly />
                                        <div className="flex">
                                            {[...Array(5)].map((_, index) => (
                                                <span key={index} className={`text-lg ${index < star ? "text-yellow-400" : "text-gray-300"}`}>
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                        <span className="text-sm">( {Math.floor(Math.random() * 100)} )</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Botão de Ordenação */}
                    <div className="relative">
                        <button onClick={() => setShowOrderBy(!showOrderBy)} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                            Ordenar por {orderBy === "relevancia" ? "relevância" : "mais recentes"} <FaChevronDown className="inline ml-1" />
                        </button>
                        {showOrderBy && (
                            <div className="absolute bg-white shadow-lg rounded-md p-3 mt-1 w-48 z-10">
                                <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded" onClick={() => setOrderBy("relevancia")}>
                                    <input type="radio" checked={orderBy === "relevancia"} readOnly />
                                    <span>Relevância</span>
                                </div>
                                <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded" onClick={() => setOrderBy("recentes")}>
                                    <input type="radio" checked={orderBy === "recentes"} readOnly />
                                    <span>Mais recentes primeiro</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* CONTEÚDO EM DUAS COLUNAS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* COLUNA 1 - LISTA DE AVALIAÇÕES */}
                    <div className="md:col-span-2 space-y-4">
                        <div className="p-4 bg-white shadow rounded-md">
                            <div className="flex items-center space-x-2">
                                {[...Array(5)].map((_, index) => (
                                    <span key={index} className="text-yellow-400 text-lg">★</span>
                                ))}
                                <span className="text-gray-600 text-sm">8 de fev. de 2025</span>
                            </div>
                            <p className="mt-2 text-gray-800">
                                Muito rápidos no envio das encomendas, e ainda enviaram uma amostra de oferta 😊
                            </p>
                            <button className="mt-2 px-3 py-1 bg-gray-200 rounded-md">Útil</button>
                        </div>

                    </div>

                    {/* COLUNA 2 - INFORMAÇÕES DA EMPRESA */}
                    <div className="p-5 bg-white shadow rounded-md md:sticky md:top-[170px] md:overflow-y-auto">

                    <h2 className="font-semibold mb-3 text-center text-2xl">Contactos</h2>
    

                    <p className="text-gray-600">
                        <FaGlobe className="inline text-gray-500 mr-2" />
                        <a href="https://farmacianumclique.pt" target="_blank" className="text-blue-600 hover:underline">
                            farmacianumclique.pt
                        </a>
                    </p>

                    <p className="text-gray-600 mt-2">
                        <FaEnvelope className="inline text-gray-500 mr-2" />
                        <a href="mailto:geral@farmacianumclique.pt" className="text-blue-600 hover:underline">
                            geral@farmacianumclique.pt
                        </a>
                    </p>

                    <p className="text-gray-600 mt-2">
                    <FaPhone className="inline text-gray-500 mr-2" />
                    <strong>+351 911 062 425</strong> (Preço de uma chamada para a Rede Móvel Nacional)
                    </p>

                    <p className="text-gray-600 mt-2">
                        <FaMapMarkerAlt className="inline text-gray-500 mr-2" />
                        <strong>Flamma Vitae, Unipessoal Lda</strong>
                    </p>
                    <p className="text-gray-600 ml-6">Rua Brigadeiro Lino Dias Valente</p>
                    <p className="text-gray-600 ml-6">n19 R/C Drto</p>
                    <p className="text-gray-600 ml-6">2005-172 Santarém</p>
                    <p className="text-gray-600 ml-6">Portugal</p>

                    <p className="text-gray-600 mt-2">
                    <FaFileAlt className="inline text-gray-500 mr-2" />
                        <strong>Registo comercial:</strong>
                    </p>
                    <p className="text-gray-600 ml-6">NIF: PT 513794603</p>
                    
                    <p className="text-gray-600 mt-2">
                    <FaUser className="inline text-gray-500 mr-2" />
                        <strong>Representante autorizado:</strong>
                    </p>
                    <p className="text-gray-600 ml-6">João Bento</p>
                    
                    {/* GOOGLE MAPS */}
                    <iframe
                    className="w-full h-40 mt-4 rounded-md"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d565.1960838499532!2d-8.693649410194807!3d39.2424575080345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18ee778f93ed3d%3A0x8cd8a0d2768ebf30!2sR.%20Brg.%20Lino%20Dias%20Valente%2C%20Santar%C3%A9m!5e1!3m2!1spt-PT!2spt!4v1740410482565!5m2!1spt-PT!2spt"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    </div>
                </div>
            </div>
            <footer className="bg-white text-gray-600 text-center py-4 mt-10 shadow-md">
                <p className="text-sm">&copy; {new Date().getFullYear()} Farmácia Num Clique. Todos os direitos reservados.</p>
            </footer>

        </div>
    );
}
