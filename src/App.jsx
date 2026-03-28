import Saudacao from "./components/Saudacao";
import Botao from "./components/Botao";
import LinksExternos from "./components/LinksExternos";
import Contador from "./components/contador";
import FalseLogin from "./components/FalseLogin";
import Card from "./components/card/Card"
import './App.css'

function App (){
    const nome = 'Érico'

    return(
        <div className="container">
        <div >
            <h1 className="titulo">Olá, {nome} React com Vite</h1>
            <Saudacao/>
            <p>Meu primeiro Componente</p>
        </div>

        <div className="card-flex">
            <Card/>
            <Card/>
        </div>


            <div>
                <Botao name="entrar" />
                <Botao name="sair"/>
            </div>
            <div>
                <LinksExternos site="https://www.google.com.br" nomeSite="Google"/>
                <LinksExternos site="https://www.youtube.com.br" nomeSite="YouTube"/>
            </div>
            <div>
                <Contador/>
            </div>
            <FalseLogin/>
        </div>

    )
}

export default App