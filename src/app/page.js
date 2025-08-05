"use client";
import React from "react";
import { useState } from "react";
import CardPessoas from "./CardPessoas";

export default function Home() {
  const [pessoas, setPessoas] = useState([
    { nome: "Luana", email: "luana.domeneghetti@gmail.com", idade: "18" },
    { nome: "João", email: "joao.silva@gmail.com", idade: "25" },
    { nome: "Thiago", email: "thiago.silva@gmail.com", idade: "30" },
  
  ]);
return (
  <div>
    {pessoas.map((pessoa, index) => (
      <CardPessoas
        key={index}
        nome={pessoa.nome}
        email={pessoa.email}
        idade={pessoa.idade}
      />
    ))}
  </div>
);
}