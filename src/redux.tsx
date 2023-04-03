export type TopCarsType = Array<CarType>
export type CarType = {
    manufacturer: string,
    model: string
}
export const state: TopCarsType = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]
