import { useEffect, useState } from 'react'
import './ue_one.css'

export function Ue_one() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount((c) => c+1)
    }

    useEffect(() => {

        const spanElement = document.querySelector('.ms-useffect');

        // Verify if exist the class
        if (spanElement) {
        // change the span's contend
        spanElement.textContent = `Message updated by useEffect ${count}`;
        } else {
        console.warn("Element '.ms-useffect' doesn't exist");
        }
    },[]);

    return (
        <>
        <div className="button-box-1">
            <h2>button couter: {count}</h2><br />

            <button className='custom-button-one' onClick={increment}>count is {count}</button>

            <span>Default message without eseffect</span>
            <span className='ms-useffect'>Default message</span><br /><br />

            <h4>Empty array ([]): Runs only once when the component mounts.</h4>
        </div>
        </>
    );
}