import React from 'react';
import './App.css';
import {Header} from "./components/header";
import {Body} from "./components/body";
import {Footer} from "./components/footer";

type AppType = {
    state: Array<CarType>
}
type CarType = {
    manufacturer: string,
    model: string

}

function App(props: AppType) {
    return (
        <div className="App">
            <Header title={"New Body"}/>
            <Body titleForBody={"NEW BODY"} listCars={props.state}/>
            <Footer titleForFooter={"New Footer"}/>
        </div>
    );
}

export default App;
