// funtion for enumerating an array of objects
export function addIdsToObjArray(objArray : { [key: string]: any }[]) :{ [key: string]: any }[] {
    const dictArrayWithIds = objArray.map((obj : { [key: string]: any }, index : number) => {
        return {
            ...obj,
            id: index
        }
    })

    return dictArrayWithIds
}