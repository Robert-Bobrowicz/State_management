import { useState, useMemo } from 'react';

function UseMemo() {
    const [numbers] = useState([2, 3, 5]);
    const total = useMemo(
        () => numbers.reduce((acc, number) => acc + number, 0),
        [numbers]
    );

    return (
        <div>
            <h2>useMemo hook</h2>
            <div>Array of numbers: {numbers.join(", ")}</div>
            <div>Total: {total}</div>
        </div>
    )
}

export default UseMemo;