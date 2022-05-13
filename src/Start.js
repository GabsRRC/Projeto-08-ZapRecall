export default function Start({setTela}){
    return(
        <div className="content start">
            <img src="img/logos.png"/>
            <h1>ZapRecall</h1>
            <div onClick={() => setTela('game')} className="start-button">Iniciar Recall!</div>
        </div>
    )
}