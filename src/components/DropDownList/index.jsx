import './DropDownList.css'

const DropDownList = (props) => {
    return (
        <div className='drop-drown-list'>
            <label>{props.label}</label>
            <select value={props.valor} onChange={event => props.allChanged(event.target.value)} required={props.mandatoryField}>
                    <option value=""></option>
                    {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDownList