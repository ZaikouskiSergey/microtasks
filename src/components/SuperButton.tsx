type SuperButtonType={
    name: string
    callback: ()=>void
}
export const SuperButton = (props:SuperButtonType) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}