import React from 'react';

import Flashcard from "./Flashcard";
import Footer from "./Footer";

export default function Deck (){

  const [rightCount, setRightCount] = React.useState(0);
  const [footCount, setFootCount] = React.useState(0);
  const [iconCount, setIconCount] = React.useState([]);

  const text = [{
      title: "Pergunta 1",
      question: "O que é JSX?",
      answer: "O JSX é uma extensão de sintaxe para JavaScript, que pode lembrar uma linguagem de template, mas que vem com todo o poder do JavaScript.",
    },
    { 
      title: "Pergunta 2",
      question: "O React é __",
      answer: "Uma biblioteca JavaScript para construção de interfaces.",
     
    },
    {
      title: "Pergunta 3",
      question: "Componentes devem iniciar com __",
      answer: "Letra maiúscula.",
    
    },
    {
      title: "Pergunta 4",
      question: "Podemos colocar __ dentro do JSX ",
      answer: "Expressões.",
    
    },
    {
      title: "Pergunta 5",
      question: "O ReactDOM nos ajuda __ ",
      answer: "Interagindo com a DOM para colocar componentes React na mesma.",
    },
    { 
      title: "Pergunta 6",
      question: "Usamos o npm para __",
      answer: "Gerenciar os pacotes necessários e suas dependências.",
      
    },
    { title: "Pergunta 7",
      question: "Usamos props para __",
      answer: "Passar diferentes informações para componentes.",
     
    },
    { title: "Pergunta 8",
      question: "Usamos estado (state) para __",
      answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente.",   
    }]

  return (
      <div className="allQuestions content">
          {text.map(card => <Flashcard title={card.title} question={card.question} answer={card.answer} footCount={footCount} setFootCount={setFootCount} rightCount={rightCount} setRightCount={setRightCount} iconCount={iconCount} setIconCount={setIconCount}/>)}
          <Footer footCount={footCount} setFootCount={setFootCount} rightCount={rightCount} setRightCount={setRightCount} iconCount={iconCount} setIconCount={setIconCount}/>
      </div>
  )
}
