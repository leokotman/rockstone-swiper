import React from "react";
import {Button, Form, InputGroup} from "react-bootstrap";

import style from "./InputMessagePage.module.css";
import Message from "./Message";

function InputMessagePage(props) {
  let newMessageText = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onChangeMessageText = () => {
    let message = newMessageText.current.value;
    props.updateNewMessageText(message);
  };

  let messageElements = props.inputMessagePage.messages.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={style.page_container}>
      <label for="newMessage">
        <InputGroup>
          <Form.Control
            as="textarea"
            ref={newMessageText}
            id="newMessage"
            onChange={onChangeMessageText}
            value={props.inputMessagePage.newMessage}
            placeholder="Your new animated message"
          />
          <Button variant="primary" onClick={addMessage}>
            Add your message
          </Button>
        </InputGroup>
      </label>
      {messageElements}
    </div>
  );
}

export default InputMessagePage;
