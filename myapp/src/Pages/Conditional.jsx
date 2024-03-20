import React from "react";

export default function Conditional() {
  let login = true;
  let name = "Sid";
  let cars = ["Audi", "BMW", "Tesla"];
  //   let cars = [];
  if (login) {
    return (
      <div>
        <h1>Conditional Rendering</h1>
        <h3>Welcome to Dashboard, {name == "" ? "Guest" : name}</h3>
        {cars.length !== 0 && (
          <h3>
            {name} likes {cars.join(", ")} cars
          </h3>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Conditional Rendering</h1>
        <h3>Please login</h3>
      </div>
    );
  }
}
