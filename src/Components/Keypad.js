
import Button from "./Button"
import '../Styles/Keypad.css'
function Keypad(props){
    return(
        <div className="keypad">
            <Button button_number="1"/>
            <Button button_number="2"/>
            <Button button_number="3"/>
            <Button button_number="4"/>
            <Button button_number="5"/>
            <Button button_number="6"/>
        </div>
    )
}

export default Keypad;