import { useState, useEffect } from "react";

export default function Count() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
        setCount((c) => c+1);
        console.log("Value increment");
    },1000)
  });

//   const inc = () => {
//     setCount((count = count + 1));
//   };

  return (
    <div>
      <h1>The Count is {count}</h1>
      {/* <button onClick={inc}>Increment</button> &nbsp; */}
    </div>
  );
}
