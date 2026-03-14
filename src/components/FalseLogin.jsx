
function FalseLogin() {
    const logado = false
    const temAviso = false
  return (
    <>
      {logado ? <h1>Bem Vindo</h1> : <h1>Faça Login</h1>}

      {temAviso && <p> Você tem novas notificações</p>}
    </>
  )
}

export default FalseLogin
