type TypeBody ={
    titleForBody:string
}
export const Body = (props:TypeBody) => {
    return (
       <div>{props.titleForBody}</div>

    )
}