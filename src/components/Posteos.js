import React from 'react'
// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
import data from "./data.json"
import Post from "./Post"
// El componente Posteos es el padre de:
// - Post (multiplicados por lo que haya en el listado JSON)
// ESTADO: Posteos no necesita manejar un estado.
// MÉTODOS: Posteos no requiere de métodos.
// PROPS: Posteos recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos junto con el resto de las props que necesitan.

export default function Posteos({sumarLikeTotal}) {


  return (
    <div className='container'>
      {/* renderizamos los Post aquí */}
      {data.map((item) => (
          <Post key={item.id}
            titulo={item.titulo}
            texto={item.texto}
            initialLikes={item.likes}
            sumarLikeTotal={sumarLikeTotal}
          />
      ))}
    </div>
  )
}
