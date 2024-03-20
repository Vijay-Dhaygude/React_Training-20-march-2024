import React, { useRef, useState } from "react";

export default function Forms() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [gender, setGender] = useState("");
  let [lang, setLang] = useState([]);

  let fname = useRef("");
  let lname = useRef("");

  const addLang = (e) => {
    if (e.target.checked) setLang([...lang, e.target.value]);
    else setLang(lang.filter((language) => language !== e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fname.current.value, lname.current.value);
  };
  return (
    <div className="container">
      <h1>Forms</h1>
      <div className="container" style={{ width: "50%", textAlign: "left" }}>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {email === "" && (
              <div
                id="emailHelp"
                className="form-text"
                style={{ color: "red" }}
              >
                Email can't be empty
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <h3>Select Gender: {gender}</h3>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Female
            </label>
          </div>
          <h3>Select Languages : {lang.join(", ")}</h3>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="English"
              id="flexCheckDefault"
              onChange={(e) => addLang(e)}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              English
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Hindi"
              id="flexCheckChecked"
              onChange={(e) => addLang(e)}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Hindi
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Marathi"
              id="flexCheckChecked"
              onChange={(e) => addLang(e)}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Marathi
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Kannada"
              id="flexCheckChecked"
              onChange={(e) => addLang(e)}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Kannada
            </label>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => console.log(email, password)}
          >
            Submit
          </button>
        </form>
        <hr />
        <h2>Uncontrolled Form</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={fname}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              ref={lname}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
