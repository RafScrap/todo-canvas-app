import React from "react";
import "./App.css";
import horse from "C:/Users/black/todo-canvas-app/src/horse.jpg";
import girl from "C:/Users/black/todo-canvas-app/src/avatar_g2.jpg";

let items = [];

export class PastTaskItems extends React.Component {
    render () {
        if (this.props.num === 1) items = []; 
        items.push({q: this.props.q, a: this.props.a});
        return (
            //<div>{
            items.map((item) => 
            <div>
                <div className = "block q-item"> 
                    <img src={horse} alt="Avatar"/>
                    {item.q}
                </div>
                    <div className = "block a-item">
                    <img src={girl} alt="avatar_g2.jpg" />
                    <div> {item.a} </div>
                </div>
            </div>)
            //}</div>     
        );
    }
}