import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";


function App() {

    //let a = 1;
    let[a,setA]=useState(1)

    let onclickHandler = () => {
        setA(++a)
    }
    let  onclickHandler1 = () => {
        setA(0)
    }
    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onclickHandler}>number</button>
            <button onClick={onclickHandler1}>0</button>
        </div>
    );
}

export default App;
