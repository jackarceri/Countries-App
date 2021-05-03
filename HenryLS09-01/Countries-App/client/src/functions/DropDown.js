function Dropdown(props) {
    return(
        <div className="dropdown-menu">
            <select className="dropdown-options" onClick={(e) => props.onChange(e.target.value)} >
            <option default value = "" >All</option>
                <option value="americas" >Americas</option>
                <option value="africa" >Africa</option>
                <option value="asia" >Asia</option>
                <option value="europe" >Europe</option>
                <option value="oceania">Oceania</option>
                <option value="polar" >Polar</option>
            </select>
        </div>
    )
}
export default Dropdown;