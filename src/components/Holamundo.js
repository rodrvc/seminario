import React from "react";

export default function HolaMundo(props) {
  console.log(props.name);
  return (
    <div>
      <h1>
        El nombre del desarrollador es: {props.name} y su edad es {props.age}
      </h1>
    </div>
  );
}

export function Componente2(props) {
  const { userinfo, elements } = props;
  const { name = "Nombre default" } = userinfo;

  return (
    <div>
      <h1>
        Rodrigo Componenet {name} y mi edad es {props.userinfo.age}
      </h1>
    </div>
  );
}

export function Calendario(props) {
  return (
    <div>
      <p>
        Este es un parrafo muy importante creado por el dia : {props.fecha.day}/
        {props.fecha.month}/{props.fecha.year}{" "}
      </p>
      <button onClick={props.mostrarFecha}>Mostrar Fecha</button>
    </div>
  );
}

export function Animal(props) {
  return (
    <p>
      Mi mascota se llama {props.mascota.name} y tiene {props.mascota.age}{" "}
      años..{" "}
    </p>
  );
}

export function Personaje(props) {
  console.log(props);
  return (
    <button onClick={() => props.character(props.user.name)}>Button</button>
  );
}

export function TablaPeriodica(props) {
  const { user, elements } = props;
  const { name = "Nombre default" } = user;
  console.log(user);
  console.log(elements);

  return (
    <div>
      <p>Los elementos de la tabla periodica son {name} </p>
    </div>
  );
}
