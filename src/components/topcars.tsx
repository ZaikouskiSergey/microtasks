type TopCarsType = {
    listCars: Array<CarType>
}
type CarType = {
    manufacturer: string,
    model: string

}
export const TopCars = (props: TopCarsType) => {
    return (
        <table>
            {props.listCars.map((car, index) => {
                return (
                    <tr key={index}>
                        <th>{car.manufacturer}</th>
                        <th> {car.model}</th>

                    </tr>
            )
            })}
        </table>


    )

}