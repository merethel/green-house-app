import { useEffect, useState } from "react";
import Data from "../components/Data";
import dummyData from '../dummyData.json'

export default function Information() {
    const [data, setData] = useState([])
    const [dataName, setDataName] = useState("")
    let dataArray = []

    const setNewData = () => {
        dataArray.push(dummyData.arrays)

            dataArray.map(item => {
                item.map(itemInformation => {
                    if(itemInformation.name === dataName){
                        setData(itemInformation)
                    }
                })
            })
    }

    useEffect(() => { //useEffect bruges for at undgå re-render
        console.log(dummyData)
        setNewData()

        //nedenstående sørger for at fjerne missin dependency warning på [data]
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]) //hver gang data ændres, skal koden indeni reloades (altså når vi skifter tab)


    return (
        <>
            <div className="dataContainer">
                <Data data={data} setDataName={setDataName}/>
            </div>
        </>
    )
}