import "./ue_dep.css";
import { useEffect, useState } from "react";

export function Ue_dep() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    const [effectCounter, setEffectCounter] = useState(0);

    function increment() {
        setCount((c) => c + 1);
    }

    function decrement() {
        setCount((c) => c - 1);
    }

    function changeColor() {
        setColor((c) => (c === "green" ? "red" : "green"));
    }

    useEffect(() => {
        setEffectCounter((prev) => prev + 1);
    }, [count]);

    return (
        <div className="button-box-2">
        <h2>useEffect counter: {effectCounter}</h2><br />
        <h2 style={{ color: color }}>Count: {count}</h2><br />
        <button className="custom-button-2" onClick={increment}>Increment</button>
        <br />
        <button className="custom-button-2" onClick={decrement}>Decrement</button>
        <br />
        <button className="custom-button-2" onClick={changeColor}>Change color</button><br />
        <h4>With dependencies: Runs based on specific changes (like componentDidUpdate).</h4>
        </div>
    );
}
