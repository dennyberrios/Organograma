import './Collaborator.css'

const Collaborator = ({imagem, nome, cargo, corDeFundo}) => {
    return (
        <div className='collaborator'>
            <div style={{backgroundColor: corDeFundo}} className='header'>
                <img src={imagem} alt={nome} />
            </div>
            <div className='footer'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Collaborator