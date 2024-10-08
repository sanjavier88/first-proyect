import React, { useRef, useState } from "react";
// import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Overlay from "./overlay";
import styled from "styled-components";
import { ButtonContrast } from "./components/button";
import ImputText from "./components/input-text";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("portal");

ReactDOM.createPortal();

class ModalPortal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default function Modal() {
  return (
    <ModalPortal>
      <ModalContent />
    </ModalPortal>
  );
}

const ModalContentStyled = styled.form`
  background: var(--bg);
  color: var(--white);
  padding: 1.5rem;
  border-radius: 0.5rem;
  position: fixed;
  inset-block-start: 50%;
  transform: translateY(-50%);
  inset-inline-start: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  inline-size: 24rem;
  .title {
    font: var(--headline2-semibold);
    margin: 0;
  }
`;

function ModalContent() {
  const form = useRef(null);
  const navigator = useNavigate();
  console.log({ form });
  const [isActive, setIsActive] = useState(true);

  function handleSubmit(event) {
    setIsActive(false);
    event.preventDefault();
    console.log({ form });

    const formData = new FormData(form.current);
    console.log(formData.get("username"));
    navigator(`/${formData.get("username")}`);
  }
  return (
    <Overlay>
      <ModalContentStyled ref={form} accion="" onSubmit={handleSubmit}>
        <h2 className="title">Busca a tu usuario favorito</h2>
        <ImputText
          type="text"
          autoComplete="off"
          name="username"
          placeholder="UserName"
        />
        <ButtonContrast text="Buscar" />
      </ModalContentStyled>
    </Overlay>
  );
}
