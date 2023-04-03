import {TopCars} from "./topcars";

type TypeBody ={
    titleForBody:string
    listCars:Array<CarType>
}
type CarType = {
    manufacturer: string,
    model: string

}
export const Body = (props:TypeBody) => {
    return (
       <div>
           {props.titleForBody}
           <TopCars listCars={props.listCars}/>
       </div>

    )
}