import './filterproduct.css'
function FilterProduct(props){
    function onChangeEventHandler(event){
        props.filterProduct(event.target.value)
    }
    return (
        <div>
            <select name="isAvailable" className="filter" onChange={onChangeEventHandler}>
                <option value="all">All</option>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
            </select>
        </div>
    )
}

export default FilterProduct;