"use client";
import { useState } from "react";

export default function Home() {
  const [vitorias, setVitorias] = useState<number | "">("");
  const [derrotas, setDerrotas] = useState<number | "">("");
  const [resultado, setResultado] = useState("");

  function calcularRank(vitorias: number, derrotas: number) {
    const saldoVitorias = vitorias - derrotas;


    const niveis = [
      { limite: 10, nome: "Ferro" },
      { limite: 20, nome: "Bronze" },
      { limite: 50, nome: "Prata" },
      { limite: 80, nome: "Ouro" },
      { limite: 90, nome: "Diamante" },
      { limite: 100, nome: "Lendário" },
      { limite: Infinity, nome: "Imortal" }, 
    ];

    let i = 0;
    let nivel = "";


    while (i < niveis.length) {
      if (vitorias <= niveis[i].limite) {
        nivel = niveis[i].nome;
        break;
      }
      i++;
    }

    return { saldoVitorias, nivel };
  }

  const classificar = () => {
    if (vitorias === "" || derrotas === "") return;

    const { saldoVitorias, nivel } = calcularRank(
      Number(vitorias),
      Number(derrotas)
    );

    setResultado(
      `O Herói tem saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Calculadora de Partidas Rankeadas
        </h1>

        <div className="flex flex-col gap-3">
          <input
            type="number"
            placeholder="Digite as vitórias"
            value={vitorias}
            onChange={(e) =>
              setVitorias(e.target.value === "" ? "" : Number(e.target.value))
            }
            className="border rounded-lg px-3 py-2"
          />

          <input
            type="number"
            placeholder="Digite as derrotas"
            value={derrotas}
            onChange={(e) =>
              setDerrotas(e.target.value === "" ? "" : Number(e.target.value))
            }
            className="border rounded-lg px-3 py-2"
          />

          <button
            onClick={classificar}
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Classificar
          </button>
        </div>

        {resultado && (
          <p className="mt-4 text-lg font-medium text-center text-green-700">
            {resultado}
          </p>
        )}
      </div>
    </main>
  );
}


