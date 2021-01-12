import React from "react";

function NumberTable({numbers, deleteNumber = f => f, decimalToBinary = f => f, decimalToOctal = f => f, decimalToHexadecimal = f => f }) {

    return (
        <table>
            <thead>
            <tr>
                <td>Decimal</td>
                <td>Binary</td>
                <td>Octal</td>
                <td>Hexadecimal</td>
            </tr>
            </thead>
            <tbody>
            {numbers.map((i, x) => {
                return (
                    <tr key={x}>
                        <td>{i}</td>
                        <td>{decimalToBinary(x)}</td>
                        <td>{decimalToOctal(x)}</td>
                        <td>{decimalToHexadecimal(x)}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
}

export default NumberTable;