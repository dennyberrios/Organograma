import './Time.css'
import Collaborator from '../Collaborator'

const Time = (props) => {
    return (
        props.collaborators.length > 0 && <section style={{ backgroundColor: props.corSecundaria }} className='time'>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='collaborators'>
                {props.collaborators.map(collaborators => <Collaborator
                    corDeFundo={props.corPrimaria}
                    key={collaborators.nome}
                    imagem={collaborators.imagem}
                    nome={collaborators.nome}
                    cargo={collaborators.cargo}
                />)}
            </div>
        </section>
    )
}

export default Time