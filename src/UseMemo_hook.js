import { useState, useMemo } from 'react';

function UseMemo() {
    const [numbers] = useState([2, 3, 5]);
    const total = useMemo(
        () => numbers.reduce((acc, number) => acc + number, 0),
        [numbers]
    );

    const [names] = useState(["Kasia", "Ania", "Ola", "Nina"]);
    const sortedNames = useMemo(() => [...names].sort(), [names]);

    return (
        <div>
            <h2>useMemo hook</h2>
            <h4>Calculating huge arrays</h4>
            <div>Array of numbers: {numbers.join(", ")}</div>
            <div>Total: {total}</div>
            <h4>Sorting huge amount of data</h4>
            <div>Array of user names: {names.join(", ")}</div>
            <div>Sorted names: {sortedNames.join(", ")}</div>
        </div>
    )
}

export default UseMemo;