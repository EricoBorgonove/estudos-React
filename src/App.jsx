import Saudacao from "./components/Saudacao";
import Botao from "./components/Botao";
import LinksExternos from "./components/LinksExternos";

function App (){
    const nome = 'Érico'

    return(
        <>
            <h1>Olá, {nome} React com Vite</h1>
            <Saudacao/>
            <p>Meu primeiro Componente</p>

            <div>
                <Botao name="entrar" />
                <Botao name="sair"/>
            </div>
            <div>
                <LinksExternos site="https://www.google.com.br" nomeSite="Google"/>
                <LinksExternos site="https://www.youtube.com.br" nomeSite="YouTube"/>
            </div>
        </>

    )
}

export default App