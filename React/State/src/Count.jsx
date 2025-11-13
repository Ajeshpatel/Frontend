import { useState } from "react"

export default function Count() {
    let [count, setCount] = useState(0);

    const inc = () => {
        setCount(count = count + 1)
    }

    const desc = () => {
      setCount(count = count - 1)
      alert("User click desc button")
    }

    const reset = () => {
      setCount(0)
    }

    return (
      <div>
        <h1>The Count is {count}</h1>
        <button onClick={inc}>Increment</button> &nbsp;
        <button onClick={desc}>Decrement</button> &nbsp;
        <button onClick={reset}>Reset</button>
      </div>
    );
}