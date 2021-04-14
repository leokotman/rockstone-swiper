import React from "react";
import {Button, Form, InputGroup} from "react-bootstrap";

import style from "./InputMessagePage.module.css";
import MessagesContainer from "./MessagesContainer";

function InputMessagePage(props) {
  let newMessageText = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onChangeMessageText = () => {
    let message = newMessageText.current.value;
    props.updateNewMessageText(message);
  };

  return (
    <div className={style.page_container}>
      <label for="new_message" className={style.input_message}>
        <InputGroup className={style.input_group}>
          <Form.Control
            as="textarea"
            ref={newMessageText}
            id="new_message"
            onChange={onChangeMessageText}
            value={props.inputMessagePage.newMessage}
            placeholder="New message"
            className="w-100"
          />
          <Button
            variant="primary"
            onClick={addMessage}
            className="input_button"
          >
            Add your message
          </Button>
        </InputGroup>
      </label>
      <MessagesContainer messages={props.inputMessagePage.messages} />
    </div>
  );
}

export default InputMessagePage;
