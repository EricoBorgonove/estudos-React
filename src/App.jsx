import Saudacao from "./components/Saudacao";
import Button from "./components/botao/Button";
import LinksExternos from "./components/LinksExternos";
import Contador from "./components/contador";
import FalseLogin from "./components/FalseLogin";
import Card from "./components/card/Card";
import Status from "./components/Status";
import './App.css'

function App (){
    const nome = 'Érico'

    return(
        <div className="container">
        <div >
            <h1 className="titulo">Olá, {nome} React com Vite</h1>
            <Saudacao/>
            <p>Meu primeiro Componente</p>
            <Status ativo={ true }/>
            <Status ativo={ false }/>
        </div>

        <div className="card-flex">
            <Card/>
            <Card/>
        </div>


            <div>
                <Button name="entrar" cor="azul" />
                <Button name="sair" cor="vermelho"/>
            </div>
            <div>
                <LinksExternos site="https://www.google.com.br" nomeSite="Google"/>
                <LinksExternos site="https://www.youtube.com.br" nomeSite="YouTube"/>
            </div>
            <div className="bg-blue-600 mt-4 p-5 text-white">
                <Contador/>
            </div>
            <FalseLogin/>
        </div>

    )
}

export default App