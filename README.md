# 🏆 Calculadora de Partidas Rankeadas

Projeto desenvolvido como parte do desafio **"Calculadora de Partidas Rankeadas"** da [DIO](https://www.dio.me/).  

---

## ⚔️ Objetivo do Desafio
Criar uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, calcula o saldo e classifica o herói em níveis de acordo com a quantidade de vitórias.

### 📊 Regras de Classificação
- **Ferro:** menos de 10 vitórias  
- **Bronze:** entre 11 e 20 vitórias  
- **Prata:** entre 21 e 50 vitórias  
- **Ouro:** entre 51 e 80 vitórias  
- **Diamante:** entre 81 e 90 vitórias  
- **Lendário:** entre 91 e 100 vitórias  
- **Imortal:** 101 vitórias ou mais  

### 🖥️ Saída Esperada
O Herói tem saldo de {saldoVitorias} vitórias e está no nível de {nivel}


---

## 🛠️ Tecnologias Utilizadas
- **React + Next.js (TypeScript)**
- **TailwindCSS** para estilização
- **Lucide Icons** para ícones

---

## 🔄 Como Funciona
1. O usuário informa a quantidade de **vitórias** e **derrotas**.  
2. O programa calcula o **saldo de vitórias** (`vitórias - derrotas`).  
3. Um `while` percorre os níveis e classifica o herói corretamente.  
4. O resultado é exibido na tela.

---

## 🚀 Como Rodar o Projeto
```bash
# Clone este repositório
git clone https://github.com/seu-usuario/calculadora-rankeadas.git

# Entre na pasta
cd calculadora-rankeadas

# Instale as dependências
npm install

# Rode o servidor local
npm run dev

Acesse em: https://calculadora-de-partidas-rankeadas-roan.vercel.app/

