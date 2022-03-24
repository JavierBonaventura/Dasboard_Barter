import React from "react";

import SideBar from "./SideBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      categorias: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:4000/api/category")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((category) => {
        this.setState({ categorias: category.category });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        <div id="wrapper">
          <SideBar />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
