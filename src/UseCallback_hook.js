import { useState, useMemo, useCallback } from "react";

//use useCallback to prevent re-render in case when fuction (sortFunc) is not being changed but only data (names) may chcange

function UseCallback() {
    const [plusOne, setPlusOne] = useState(0);
    const [minusOne, setMinusOne] = useState(0);

    const [names] = useState(["Kasia", "Ania", "Ola", "Nina", "Sandra", "Julia", "Marek", "Janek", "Pjoter", "Paweł", "King", "Rysio", "Magda", "Anastazja", "Kala", "Olek", "Adam", "Sasza"]);

    function SortedNames({ list, sortFunc }) {
        console.log("Running sort function");
        const sortedNames = useMemo(() => {
            console.log("Running sort");
            return [...list].sort(sortFunc)
        }, [list, sortFunc]);
        return <div>Sorted names in reverse order: [ {sortedNames.join(", ")} ]</div>;
    };

    const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []); //sotowanie odwrotne

    return (
        <div>
            <h2>useCallback hook</h2>
            <SortedNames list={names} sortFunc={sortFunc} />
            <button onClick={() => setPlusOne(plusOne + 1)}> +1: {plusOne}</button>
            <button onClick={() => setMinusOne(minusOne - 1)}> -1: {minusOne}</button>
        </div>
    )
}

export default UseCallback;