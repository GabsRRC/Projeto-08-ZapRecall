import logos from "./img/logos.png"

import { Link } from "react-router-dom";

export default function Start({setTela}){
    return(
        <div className="content start">
            <img src={logos} alt="logos"/>
            <h1>ZapRecall</h1>
            <div className="start-button"><Link to="/game">Iniciar Recall!</Link></div>
        </div>
    )
}