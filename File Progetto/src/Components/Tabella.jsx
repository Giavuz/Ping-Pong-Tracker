import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Tabella = ()=> {
    const [column, setColumn] = useState([])
    const [record, setRecord] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/partite.json')
        .then(res=>res.json())
        .then(partita=>{
            setColumn(Object.keys(partita.Partite[0]))
            setRecord(partita.Partite)
        })
    }, [])
    return(
        <div>
            <table className="RegistroPartite">
                <thead className="TheadPartite">
                    {column.map((c,i)=>(
                        <th key = {i}>{c}</th>
                    ))}
                </thead>
                <tbody className="TbodyPartite">
                    {
                        record.map((record,i)=>(
                            <tr className= "records" key={i}>
                                <td>{record.ID}</td>
                                <td>{record.Points_By_Green}</td>
                                <td>{record.Points_By_Blue}</td>
                                <td>{record.Hours}</td>
                                <td>{record.Winner}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Tabella;