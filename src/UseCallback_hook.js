import { useState, useMemo, useCallback } from "react";

function UseCallback() {
    const [plusOne, setPlusOne] = useState(0);
    const [minusOne, setMinusOne] = useState(0);

    const [names] = useState(["Kasia", "Ania", "Ola", "Nina", "Sandra", "Julia", "Marek", "Janek", "Pjoter", "Paweł", "King", "Rysio", "Magda", "Anastazja", "Kala", "Olek", "Adam", "Sasza"]);
    // const sortedNames = useMemo(
    //     () => [...names].sort(sortFunc), [names]
    // );

    const sortFunc = (a, b) => a.localeCompare(b) * -1; //sotowanie odwrotne

    function SortedNames({ list }) {
        const sortedNames = useMemo(() => [...list].sort(sortFunc), [list]);
        return <div>Sorted names in reverse order: [ {sortedNames.join(", ")} ]</div>;
    };

    return (
        <div>
            <h2>useCallback hook</h2>
            <SortedNames list={names} />
            <button onClick={() => setPlusOne(plusOne + 1)}> +1: {plusOne}</button>
            <button onClick={() => setMinusOne(minusOne - 1)}> -1: {minusOne}</button>
        </div>
    )
}

export default UseCallback;