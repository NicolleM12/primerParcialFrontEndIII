import React from 'react'
import Estatus from "./components/Estatus"
import Posteos from "./components/Posteos"
import { useState } from "react";
// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

function App() {

  const [totalLikes, setTotalLikes] = useState(0)

  const sumarLikeTotal = function(event) {
    setTotalLikes(parseInt(totalLikes)+1)
  }

  return (
    <div className="App">
      <Estatus totalLikes={totalLikes}  />
      <Posteos sumarLikeTotal={sumarLikeTotal}  />
    </div>
  );
}

export default App;
