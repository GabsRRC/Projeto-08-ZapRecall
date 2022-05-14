import React from 'react';

import { Link } from "react-router-dom";

import party from "./img/party.png"
import sad from "./img/sad.png"

export default function Footer({footCount, rightCount, iconCount}){


    if (footCount !== 8){
        return(
            <div className="footer-main">
                <div className="footer-title"><img src="" alt=""/></div>
                <div className="footer-text"></div>
                <div>{footCount}/8 CONCLUÍDOS</div>
                <div className="footer-icons">
                    {iconCount}
                </div>
            </div>
        )
    } else if (footCount ===8 && rightCount !==8){
        return(
            <div className="footer-main">
                <div className="footer-title"><img src={sad} alt=""/> Putz!</div>
                <div className="footer-text">Ainda faltam alguns... Mas não desanime!</div>
                <div>{footCount}/8 CONCLUÍDOS</div>
                <div className="footer-icons">
                    {iconCount}
                </div>
                <div className="retry"><Link to="/">REINICIAR RECALL</Link></div>
            </div>
        )
    } else if (footCount ===8 && rightCount ===8){
        return(
            <div className="footer-main">
                <div className="footer-title"><img src={party} alt=""/> Parabéns!</div>
                <div className="footer-text">Você não esqueceu de nenhum flashcard!</div>
                <div>{footCount}/8 CONCLUÍDOS</div>
                <div className="footer-icons">
                    {iconCount}
                </div>
            </div>
        )
    }
}