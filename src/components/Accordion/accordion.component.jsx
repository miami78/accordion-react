import React from "react";

import "./accordion.styles.scss";

class Card extends React.Component {
    constructor(){
        super();
        this.state = {
            showMore: false 
        }
    }
    
    render(){
        return (
            <div className="card">
                <p>This is the card</p>
            </div>
        )
    }
}

export default Card;