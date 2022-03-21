import React, { Component } from "react";

class CategoriaInDb extends Component {
  constructor() {
    super();
    this.state = {
      categoria: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/category")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((category) => {    
        this.setState({ categoria: category.category });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate() {
    fetch("http://localhost:4000/api/category")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((category) => {    
        this.setState({ categoria: category.category });
      })
      .catch((error) => console.log(error));
  }


  render() {
    return (
      <React.Fragment>
        {/*<!-- Categories in DB -->*/}
              <div>

              <p>Cantidad de categoria {
                this.state.categoria.length}        
                </p>   

                <p>Listado de categoria {
                this.state.categoria.map(function(item, index){             
                  return <li key={index}>{item.categoria} </li>
                })}        
                </p>         
              </div>
      </React.Fragment>
    );
  }
}
export default CategoriaInDb;
