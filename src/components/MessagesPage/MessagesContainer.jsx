import Message from "./Message";
import style from "./MessagesContainer.module.css";

function MessagesContainer(props) {
  let messageElements = props.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  return <div className={style.messages}>{messageElements}</div>;
}

export default MessagesContainer;
