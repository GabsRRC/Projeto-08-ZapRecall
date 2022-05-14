import React from 'react';

import check from "./img/check.svg"
import close from "./img/close.svg"
import help from "./img/help.svg"
import play from "./img/play.svg"
import setinha from "./img/setinha.png"


export default function Flashcard ({title, question, answer, footCount, setFootCount, rightCount, setRightCount, iconCount, setIconCount}){
    const [classButton, setClassButton] = React.useState("play-button");
    const [classAnswer, setClassAnswer] = React.useState("")
    const [changeIcon, setChangeIcon] = React.useState(play)
    const [lockIcon, setLockIcon] = React.useState()

    function changeStatusRight(){
        setClassButton("play-button")
        setClassAnswer("right")
        setChangeIcon()
        setLockIcon(check)
        setFootCount(footCount +1)
        setRightCount(rightCount +1)
        iconCount.push(<img src={check} alt=""/>)

    }

    function changeStatusAlmost(){
        setClassButton("play-button")
        setClassAnswer("partial")
        setChangeIcon()
        setLockIcon(help)
        setFootCount(footCount +1)
        setRightCount(rightCount +1)
        iconCount.push(<img src={help} alt=""/>)

    }

    function changeStatusWrong(){
        setClassButton("play-button")
        setClassAnswer("wrong")
        setChangeIcon()
        setLockIcon(close)
        setFootCount(footCount +1)
        iconCount.push(<img src={close} alt=""/>)
    }


    if (classButton==="play-button"){
        return(
            <div className={classButton}> 
                <img className="icon" src={changeIcon} alt="" onClick={() => setClassButton("question-button")}/><p className={classAnswer}>{title}</p>
                <img className="icon" src={lockIcon} alt=""/>
            </div>
        )
    }

    else if (classButton==="question-button"){
        return(
            <div className={classButton}> 
                <img className="arrow" src={setinha} alt="" onClick={() => setClassButton("answer-button")}/>{question}
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