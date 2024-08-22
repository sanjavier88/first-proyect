import { useState } from "react";

function User({ name, avatar, counter }) {
  const [calculatedName, setCalculatedName] = useState(name);

  const newName = `${calculatedName} es muy fuerte`;

  function onClick() {
    setCalculatedName("Evangelion");
    // setCounter(counter + 1);
    console.log(`hola ${name}, este es un click onClick`);
  }
  return (
    <div className="User" onClick={onClick}>
      <img src={avatar} title={name} alt="" />
      <p>
        hemos dado click en {newName} por {counter} veces
      </p>
    </div>
  );
}

export default User;
