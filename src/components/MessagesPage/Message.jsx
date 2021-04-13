import style from "./Message.module.css";

function Message(props) {
  return (
    <article className={style.message_animated}>
      <div>{props.message}</div>
    </article>
  );
}

export default Message;
