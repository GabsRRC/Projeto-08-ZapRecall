import check from "./img/check.svg"
import close from "./img/close.svg"
import help from "./img/help.svg"
import play from "./img/play.svg"
import setinha from "./img/setinha.png"
import React from 'react';

export default function Play (){
    return(
        <Cards />
    )
}

function Cards (){
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
            {text.map(Card)}
        </div>
    )
}


function Card ({title, question, answer}){
    const [classButton, setClassButton] = React.useState("play-button");
    const [classAnswer, setClassAnswer] = React.useState("")
    const [changeIcon, setChangeIcon] = React.useState(play)
    const [lockIcon, setLockIcon] = React.useState()

    function changeStatusRight(){
        setClassButton("play-button")
        setClassAnswer("right")
        setChangeIcon()
        setLockIcon(check)
    }

    function changeStatusAlmost(){
        setClassButton("play-button")
        setClassAnswer("partial")
        setChangeIcon()
        setLockIcon(help)
    }

    function changeStatusWrong(){
        setClassButton("play-button")
        setClassAnswer("wrong")
        setChangeIcon()
        setLockIcon(close)
    }


    if (classButton==="play-button"){
        return(
            <div className={classButton}> 
                <img className="icon" src={changeIcon} onClick={() => setClassButton("question-button")}/><p className={classAnswer}>{title}</p>
                <img className="icon" src={lockIcon}/>
            </div>
        )
    }

    else if (classButton==="question-button"){
        return(
            <div className={classButton}> 
                <img className="arrow" src={setinha} onClick={() => setClassButton("answer-button")}/>{question}
            </div>
        )

    }
    else if (classButton==="answer-button"){
        return(
            <div className={classButton}>
                <p>{answer}</p>
                <div className="answer">
                    <div className="answer-one" onClick={changeStatusWrong}>Não lembrei</div>
                    <div className="answer-two" onClick={changeStatusAlmost}>Quase não lembrei</div>
                    <div className="answer-three" onClick={changeStatusRight}>Zap!</div>
                </div>
            </div>
        )
    }
}