import React from "react";

export default function NumberButtons({x, i, deleteNumber = f => f, decimalToBinary = f => f, decimalToOctal = f => f, decimalToHexadecimal = f => f, refresh}) {

    const [data, setData] = React.useState("")

    React.useEffect(() => {
        setData("")
    }, [refresh])

    return (
        <li key={x}>{i}
            <button onClick={() => deleteNumber(x)}>Delete</button>
            <button onClick={() => setData(decimalToBinary(x))}>Binary</button>
            <button onClick={() => setData(decimalToOctal(x))}>Octal</button>
            <button onClick={() => setData(decimalToHexadecimal(x))}>Hexadecimal</button>
            <b>{data}</b>
        </li>
    )
}