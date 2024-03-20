import React, { Component } from "react";

export default class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sid",
      place: "Bangalore",
    };
    console.log("Constructor called");
  }

  //   changePlace() {
  //     this.setState({ place: "Pune" });
  //   }
  changePlace = () => {
    this.setState({ place: "Pune" });
  };

  componentDidMount() {
    console.log("Component is mounted");
  }

  componentDidUpdate() {
    console.log("Component is updated");
  }

  componentWillUnmount() {
    console.log("Component is about to be removed");
  }

  render() {
    console.log("Component is rendering");
    return (
      <div>
        <h1>Class Component</h1>
        <h3>
          Hi I am {this.state.name} from {this.state.place}
        </h3>
        <button
          type="button"
          className="btn btn-success"
          //   onClick={this.changePlace.bind(this)}
          onClick={this.changePlace}
        >
          Change Place
        </button>
      </div>
    );
  }
}
