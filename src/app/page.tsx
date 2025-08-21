"use client";
import { useState } from "react";


class Heroi {
  nome: string;
  idade: number;
  tipo: "guerreiro" | "mago" | "monge" | "ninja";

  constructor(nome: string, idade: number, tipo: "guerreiro" | "mago" | "monge" | "ninja") {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    if (this.tipo === "mago") ataque = "magia";
    else if (this.tipo === "guerreiro") ataque = "espada";
    else if (this.tipo === "monge") ataque = "artes marciais";
    else if (this.tipo === "ninja") ataque = "shuriken";
    else ataque = "ataque desconhecido";

    return `${this.tipo} atacou usando ${ataque}`;
  }
}

export default function JogoHeroi() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState<number | "">("");
  const [tipo, setTipo] = useState<"guerreiro" | "mago" | "monge" | "ninja" | "">("");
  const [quantidadeAtaques, setQuantidadeAtaques] = useState<number | "">("");
  const [resultado, setResultado] = useState<string[]>([]);

  const handleAtacar = () => {
    if (nome === "" || idade === "" || tipo === "" || quantidadeAtaques === "") return;

    const heroi = new Heroi(nome, Number(idade), tipo);
    const ataques: string[] = [];


    let i = 0;
    while (i < Number(quantidadeAtaques)) {
      ataques.push(heroi.atacar());
      i++;
    }

    setResultado(ataques);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100 text-white">
      <div className="bg-black shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Jogo de Heróis - Ataques Múltiplos</h1>

        <div className="flex flex-col gap-3 bg-black">
          <input
            type="text"
            placeholder="Nome do herói"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border rounded-lg px-3 py-2"
          />

          <input
            type="number"
            placeholder="Idade do herói"
            value={idade}
            onChange={(e) => setIdade(e.target.value === "" ? "" : Number(e.target.value))}
            className="border rounded-lg px-3 py-2"
            min={0}
          />

          <select
            value={tipo}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setTipo(e.target.value as "guerreiro" | "mago" | "monge" | "ninja" | "")
            }
            className="border rounded-lg px-3 py-2 bg-black"
          >
            <option value="">Selecione o tipo</option>
            <option value="guerreiro">Guerreiro</option>
            <option value="mago">Mago</option>
            <option value="monge">Monge</option>
            <option value="ninja">Ninja</option>
          </select>

          <input
            type="number"
            placeholder="Quantidade de ataques"
            value={quantidadeAtaques}
            onChange={(e) => setQuantidadeAtaques(e.target.value === "" ? "" : Number(e.target.value))}
            className="border rounded-lg px-3 py-2"
            min={1}
          />

          <button
            onClick={handleAtacar}
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Atacar
          </button>
        </div>

        {resultado.length > 0 && (
          <div className="mt-4 text-lg font-medium text-center text-green-700">
            {resultado.map((msg, index) => (
              <p key={index}>{msg}</p>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}




