
import '../Styles/Button.css'
function Button(props){
    const{button_text}=props;
    return(
        <div>
            <button>{button_text}</button>
        </div>
    )
}

export default Button;