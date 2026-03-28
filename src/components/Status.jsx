
function Status({ ativo }) {
  return (
    <p style={{ color: ativo ? 'green' : 'red' }}>
      {ativo ? 'Ativo' : 'Inativo'}
    </p>
  )
}

export default Status
