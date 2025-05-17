function Cat(props){
    return(<>

        <div className="toys">
            <span>{props.name}</span>
            <span>{props.price}</span>
            <span>{props.category}</span>
            <span>{props.stock}</span>
            <span>{props.date}</span>
        </div>
    
    
    </>)
}
export default Cat