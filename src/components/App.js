import React from 'react';
import UsuariosInDb from './UsuariosInDb';
import ProductosInDb from './ProductosInDb';
import CategoriaInDb from './CategoriaInDb';

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
        <UsuariosInDb />
        <ProductosInDb />
        <CategoriaInDb />
        </div>
    </React.Fragment>
  );
}

export default App;
