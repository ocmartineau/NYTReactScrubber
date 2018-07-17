import React from "react";
import "./Button.css";

class Button extends React.Component {
    render () {
        const {text, handleButton} = this.props;
        return (
            <button type="button" onClick={handleButton}>
                {text}
            </button>
        )
    }
}

export default Button
