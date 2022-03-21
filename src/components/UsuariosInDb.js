import React, { Component } from "react";

class UsuariosInDb extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/users")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((users) => {    
        this.setState({ usuarios: users.users });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate() {
    fetch("http://localhost:4000/api/users")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((users) => {    
        this.setState({ usuarios: users.users });
      })
      .catch((error) => console.log(error));
  }


  render() {
    return (
      <React.Fragment>
        {/*<!-- Categories in DB -->*/}
              <div>

              <p>Cantidad de Usuairos {
                this.state.usuarios.length}        
                </p>   

                <p>Listado de Usuarios {
                this.state.usuarios.map(function(item, index){
                  console.log('test');
                  return <li key={index}>{item.first_name} </li>
                })}        
                </p>         
              </div>
      </React.Fragment>
    );
  }
}
export default UsuariosInDb;
