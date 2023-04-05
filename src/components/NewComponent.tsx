import React from "react";
import {NewButtonType} from "../App";

export type CurrentType ={
    banknots: string
    value: number
    number: string
}
export type NewComponentType={
    currentMoney: Array<CurrentType>
    onClickHandler:(nameButton:NewButtonType )=> void
}

export const NewComponent=(props:NewComponentType)=>{
return(
    <>
        <ul>
            {props.currentMoney.map((objFromMoneyArr, index) => {
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
            <button onClick={() => props.onClickHandler('all')}>all</button>
            <button onClick={() => props.onClickHandler('rubl')}>rubl</button>
            <button onClick={() => props.onClickHandler('dollar')}>dollar</button>
        </div>
    </>
)}