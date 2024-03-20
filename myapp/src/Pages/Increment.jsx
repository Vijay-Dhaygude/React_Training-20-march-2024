import React, { useState } from "react";
import Button from "../Componants/Button";
import { useSelector } from "react-redux";

export default function Increment() {
  let [counter, setCounter] = useState(1000);
  let num = useSelector((state) => state.counter.num);

  const increment = (val, op) => {
    if (op === "Increment") setCounter((prev) => prev + val);
    else if (op === "Decrement") setCounter((prev) => prev - val);
  };
  return (
    <div>
      <h1>Inrement Activity</h1>
      <h3>The counter is {counter}</h3>
      <Button inc={increment} val={50} op="Increment" />
      <Button inc={increment} val={100} op="Increment" />
      <Button inc={increment} val={50} op="Decrement" />
      <Button inc={increment} val={100} op="Decrement" />
      <hr />
      <h3>A number from Redux sore is {num}</h3>
    </div>
  );
}

// import React, { useState } from "react";

// export default function Increment() {
//   let [counter, setCounter] = useState(1000);

//   const increment = (val) => {
//     setCounter(counter + val);
//   };
//   const decrement = (val) => {
//     setCounter(counter - val);
//   };
//   return (
//     <div>
//       <h1>Inrement Activity</h1>
//       <h3>The counter is {counter}</h3>
//       <button
//         type="button"
//         className="btn btn-primary m-2"
//         onClick={() => increment(50)}
//       >
//         Increment
//       </button>
//       <button
//         type="button"
//         className="btn btn-primary m-2"
//         onClick={() => increment(100)}
//       >
//         Increment
//       </button>
//       <button
//         type="button"
//         className="btn btn-primary m-2"
//         onClick={() => decrement(50)}
//       >
//         Decrement
//       </button>
//       <button
//         type="button"
//         className="btn btn-primary m-2"
//         onClick={() => decrement(100)}
//       >
//         Decrement
//       </button>
//     </div>
//   );
// }
