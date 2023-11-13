import React, { useMemo, useState } from "react"



const Workingthur = () => {


    const [number, setNumber] = useState("")
    const [count, setCount] = useState(0)


    // const Mike = Working(number)
    const Mike = useMemo(()=> {
        Working(number)
    }, [])
    return(
        <>
        <input type="number" onChange={(e) => setNumber(e.target.value)} />
        <h1>Output: {Mike}</h1>
        <h1>let count{count}</h1>
        <button onClick={(e) => setCount(count + 1)}>increase</button>
        
        </>
    )
}

export default Workingthur


const Working = (number) => {
    console.log("working with useMemo")

    return Math.pow(number, 2)
}