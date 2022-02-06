import React, { useState } from "react";
// import { useSelector } from "react-redux";
import "./App.css";
import Button from "./components/Button";
import Field from "./components/Field";
import Footer from "./components/Footer";
// import { AddPost } from "./components/AddPost";
// import { Counter } from "./components/Counter";
// import { DisplayPost } from "./components/DisplayPost";
import { Header } from "./components/Header";
import Modal from "./components/Modal";
// import { Product } from "./components/Product";
// import CartUI from "./components/CartUI";

function App() {
  // const value = useSelector((state) => state.post);
  const [userName, setUserName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [modalBool, setModalBool] = useState(false);
  const [letter, setLetter] = useState("");
  const [context, setContext] = useState("");

  const wordToArray = (word) => {
    return word.split("");
  };

  const calculateFlames = () => {
    userName.replace(/ /g, "");
    partnerName.replace(/ /g, "");
    const username = wordToArray(userName.toLowerCase());
    const partnername = wordToArray(partnerName.toLowerCase());
    username.sort();
    partnername.sort();
    let count = 0;
    let i = 0,
      j = 0;
    while (i < username.length && j < partnername.length) {
      if (username[i] === partnername[j]) {
        count++;
      }
      i++;
      j++;
    }
    const flames = ["F", "L", "A", "M", "E", "S"];
    while (flames.length > 1) {
      let idx = (flames.length % count) - 1;
      flames.splice(idx, 1);
    }
    setLetter(flames[0]);
    switch (flames[0]) {
      case "F":
        setContext("Friends");
        break;
      case "L":
        setContext("in Love");
        break;
      case "A":
        setContext("will end in Arrange Marriage");
        break;
      case "M":
        setContext("will end in Marriage");
        break;
      case "E":
        setContext("Enemy");
        break;
      case "S":
        setContext("Relation (Sister and Brother)");
        break;
      default:
        setContext("Oops!");
    }
    setModalBool(!modalBool);
    setUserName("");
    setPartnerName("");
  };

  return (
    <div className="App">
      <Header />
      {modalBool && (
        <Modal
          letter={letter}
          context={context}
          onClose={() => setModalBool(!modalBool)}
        />
      )}
      <br />
      <div className="styleFix">
        <Field
          type={"text"}
          onChange={(e) => setUserName(e.target.value)}
          placeholder={"Your Name"}
        />
        <br />
        <br />
        <Field
          type={"text"}
          onChange={(e) => setPartnerName(e.target.value)}
          placeholder={"Your Partner's Name"}
        />
        <br />
        <br />
        <br />
        <Button
          type={"submit"}
          onClick={calculateFlames}
          placeholder={"Calculate"}
        />
      </div>
      <Footer placeholder={"\u{2665} Made by 90's Kid"} />
      {/* <div className="main_container">
        <div className="product_container">
          {value.map((i) => (
            <Product
              imageURL={i.imageURL}
              title={i.title}
              id={i.id}
              key={i.id}
              price={i.price}
            />
          ))}
        </div>
        <div>
          <CartUI />
        </div>
      </div> */}
      {/* <Counter />
      <br />
      <AddPost />
      <br />
      <DisplayPost /> */}
    </div>
  );
}

export default App;
