import { useState } from "react";
import styled from "styled-components";

const Avatar = styled.img`
  border: 10px solid black;
`;

function User({ color, name, avatar, counter }) {
  const [calculatedName, setCalculatedName] = useState(name);

  const newName = `${calculatedName} es muy fuerte`;

  function onClick() {
    setCalculatedName("Evangelion");
    // setCounter(counter + 1);
    console.log(`hola ${name}, este es un click onClick`);
  }
  return (
    <div className="User" onClick={onClick}>
      <Avatar src={avatar} title={name} alt="" />
      <p>
        hemos dado click en {newName} por {counter} veces
      </p>
    </div>
  );
}

export default User;
