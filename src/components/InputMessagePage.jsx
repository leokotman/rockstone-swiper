import React from "react";
import {Button, Form, InputGroup} from "react-bootstrap";

import style from "./InputMessagePage.css";

function InputMessagePage(props) {
  let newMessageText = React.createRef();

  let addMessage = () => {
    debugger;
    props.addMessage(newMessageText.current.value);
  };
  return (
    <div className={style.page_container}>
      <label for="newMessage">
        <InputGroup>
          <Form.Control as="textarea" ref={newMessageText} id="newMessage" />
          <Button variant="primary" onClick={addMessage}>
            Add your message
          </Button>
        </InputGroup>
      </label>
    </div>
  );
}

export default InputMessagePage;
