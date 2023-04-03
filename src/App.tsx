import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/header";
import {Body} from "./components/body";
import {Footer} from "./components/footer";

function App() {
    return (
        <div className="App">
            <Header title={"New Body"}/>
            <Body titleForBody={"NEW BODY"}/>
            <Footer titleForFooter={"New Footer"} />

        </div>
    );
}

export default App;
