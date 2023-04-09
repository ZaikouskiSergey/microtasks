import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";


function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])
    let [title, setTitle] = useState('')

    const addMessage = () => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }
    const callbackButtonHandler =()=>{
        addMessage();
        setTitle('')
    }
    return (
        <div className={'App'}>
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={callbackButtonHandler}/>
            {/*<FullInput addMessage={addMessage}/>*/}
            {message.map((el, index) => {
                return (<div key={index}>{el.message}</div>)
            })}
        </div>
    )


}

export default App;

//-------------------------------------------------------------------
/*
import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {NewComponent} from "./components/NewComponent";

export type NewButtonType = 'dollar' | 'rubl' | 'all'

function App() {
const [money, setMoney] = useState([
{banknots: 'Dollars', value: 100, number: ' a1234567890'},
{banknots: 'Dollars', value: 50, number: ' z1234567890'},
{banknots: 'RUBLS', value: 100, number: ' w1234567890'},
{banknots: 'Dollars', value: 100, number: ' e1234567890'},
{banknots: 'Dollars', value: 50, number: ' c1234567890'},
{banknots: 'RUBLS', value: 100, number: ' r1234567890'},
{banknots: 'Dollars', value: 50, number: ' x1234567890'},
{banknots: 'RUBLS', value: 50, number: ' v1234567890'},
])

const [filter, setFilter] = useState('all');

let currentMoney = money;

if (filter === 'dollar') {
currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars')
}
if (filter === 'rubl') {
currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS')

}
const onClickHandler = (nameButton: NewButtonType) => {
setFilter(nameButton)
}
return (
<NewComponent
currentMoney={currentMoney}
onClickHandler={onClickHandler}
/>
/!* <>
<ul>
{currentMoney.map((objFromMoneyArr, index) => {
return (
<li key={index}>
<span>{objFromMoneyArr.banknots}</span>
<span>{objFromMoneyArr.value}</span>
<span>{objFromMoneyArr.number}</span>
</li>
)
})}

</ul>
<div style={{marginLeft: '35px'}}>
<button onClick={() => onClickHandler('all')}>all</button>
<button onClick={() => onClickHandler('rubl')}>rubl</button>
<button onClick={() => onClickHandler('dollar')}>dollar</button>
</div>
</>*!/

);
}

export default App
*/
