import './Form.css'
import BoxText from "../BoxText"
import DropDownList from '../DropDownList'
import Button from '../Button'
import { useState } from 'react'

const Form = (props) => {

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")

    const allSaved = (event) => {
        event.preventDefault();
        
        props.allRegisteredCollaborators({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='form'>
            <form onSubmit={allSaved}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <BoxText
                    mandatoryField={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor = {nome}
                    allChanged={valor => setNome(valor)}
                 />

                <BoxText
                    mandatoryField={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    allChanged={valor => {setCargo(valor)}}
                 />

                <BoxText
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valor={imagem}
                    allChanged={valor => setImagem(valor)}
                 />

                <DropDownList
                    mandatoryField={true} 
                    label="Time" 
                    itens={props.times} 
                    valor={time}
                    allChanged={valor => setTime(valor)}
                 />

                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form