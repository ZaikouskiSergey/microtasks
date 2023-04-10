import React from 'react';

type DataType = {
    id: number
    model: string
    price: number
}
type PropsType = {
    prices: DataType[]
    children?: React.ReactNode
}

export const Adidas: React.FC<PropsType> = (props) => {
    const {prices, children, ...restProps} = props
    return (
        <div>
            {props.prices.map(el => {
                return (
                    <div>
                        <span>{el.id}</span>
                        <span>{el.model}</span>
                        <span>{el.price}</span>
                    </div>
                )
            })}
            <div>{props.children}</div>
            <div>--------------------------------------------------</div>
        </div>
    );
};

