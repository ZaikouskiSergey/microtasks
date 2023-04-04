import React from 'react';
import './App.css';
import {Button} from "./components/Button";


function App() {
    const Button1Foo = (subscriber:string, age:number, address:string) => {
        console.log(subscriber, age, address)

    }
    const Button2Foo = (subscriber:string) => {
        console.log(subscriber)

    }
    const Button3Foo =() =>{
        console.log("i'm a stupid button")
    }

    return (
        <div className="App">
            <Button name={'MyYouTubeChanel-1'} callBack={()=> Button1Foo('im vasja', 21, 'live in Minsk')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={()=> Button2Foo('im kolja')}/>
            <Button name={'Stupid Button'} callBack={Button3Foo} />

        </div>
    );
}

export default App;
