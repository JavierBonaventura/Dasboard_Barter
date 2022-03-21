import React, { Component } from "react";

class ProductosInDb extends Component {
  constructor() {
    super();
    this.state = {
      productos: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/products")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((products) => {    
        this.setState({ productos: products.products });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate() {
    fetch("http://localhost:4000/api/products")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((products) => {    
        this.setState({ productos: products.products });
      })
      .catch((error) => console.log(error));
  }


  render() {
    return (
      <React.Fragment>
        {/*<!-- Categories in DB -->*/}
              <div>

              <p>Cantidad de Productos {
                this.state.productos.length}        
                </p>   

                <p>Listado de Productos {
                this.state.productos.map(function(item, index){             
                  return <li key={index}>{item.nombre_producto} </li>
                })}        
                </p>         
              </div>
      </React.Fragment>
    );
  }
}
export default ProductosInDb;
