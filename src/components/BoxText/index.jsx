import './BoxText.css'

const BoxText = (props) => {

  const completedField = (event) => {

    props.allChanged(event.target.value)
  }

  return (
    <div className='box-text'>
      <label>{props.label}</label>
      <input value={props.valor} onChange={completedField} required={props.mandatoryField} placeholder={props.placeholder} />
    </div>
  )
}

export default BoxText
