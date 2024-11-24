import './ue_none.css'
import { useEffect, useState } from 'react'

export function Ue_none() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount((c) => c+1)
    }

    useEffect(() => {
        window.alert(`useEffect is: ${count}`);
    });

    return (
        <div className="button-box">
            <h2>useEffect couter: {count}</h2><br /><br />

            <button className='custom-button' onClick={increment}>count is {count}</button>

            <h4>Effect without dependencies runs on every render</h4>
        </div>
    );
}
