export default function Play (){
    return(
            <div className="allQuestions content">
                
                <div className="play-button"> 
                    <ion-icon class="icon" name="play-outline"></ion-icon>Pergunta
                </div>

                <div className="play-button right"> 
                    <ion-icon class="icon" name="checkmark-circle"></ion-icon>Pergunta
                </div>
                <div className="play-button partial"> 
                    <ion-icon class="icon" name="help-circle"></ion-icon>Pergunta
                </div>
                <div className="play-button wrong"> 
                    <ion-icon class="icon" name="close-circle"></ion-icon>Pergunta
                </div>
                
                <div className="question-button"> pergunta <img className="arrow" src="img/setinha.png"/></div>
                    
                <div className="anwser-button">
                    <p>resposta AAAAAAAAA AAAAAA AAAAAAAAA AAAAA resposta AAAAAAAAA AAAAAA AAAAAAAAA AAAAA</p>
                    <div className="anwser">
                        <div className="anwser-one">Não lembrei</div>
                        <div className="anwser-two">Quase não lembrei</div>
                        <div className="anwser-three">Zap!</div>
                    </div>
                </div>

            </div>
    )
}
