import React, { useEffect, useState } from "react";

export default function LifeCycle() {
  let [name, setName] = useState("Raj");
  let [place, setPlace] = useState("Delhi");

  useEffect(() => {
    console.log("Component is mounted"); //Runs on first render only
  }, []);

  useEffect(() => {
    return () => {
      console.log("Component is about to be removed");
    };
  }, []);

  useEffect(() => {
    console.log("Component is updated (runs on first render also)"); //Runs on every render
  });

  useEffect(() => {
    console.log("Place is changed (runs on first render also)");
    //runs when there are any upadtes to variables passed to dependency array and runs on first render also
  }, [place]);
  return (
    <div>
      <h1>Life Cycle - useEffect</h1>
      <h3>
        Hi, I am {name} from {place}
      </h3>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => setPlace(() => "Pune")}
      >
        Change Place
      </button>
      <button
        type="button"
        className="btn btn-outline-danger m-2"
        onClick={() => setName(() => "Ram")}
      >
        Change Name
      </button>
    </div>
  );
}
