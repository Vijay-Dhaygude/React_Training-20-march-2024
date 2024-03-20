import React from "react";

export default function Button({ inc, val, op }) {
  return (
    <button
      type="button"
      className="btn btn-primary m-2"
      onClick={() => inc(val, op)}
    >
      {op} by {val}
    </button>
  );
}

// export default function Button(props) {
//   return (
//     <button
//       type="button"
//       className="btn btn-primary m-2"
//       onClick={() => props.inc(props.val, props.op)}
//     >
//       {props.op} by {props.val}
//     </button>
//   );
// }

// props = {
//   inc: increment,
//  op: "Increment",
//  val: 50
// };
