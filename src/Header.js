import logos from "./img/logos.png"

export default function Header(){
    return(
        <div className="header">
            <div className="header-itens">
                <img src={logos} alt="logos"/>
                <h1>ZapRecall</h1>
            </div>
        </div>
    )
}