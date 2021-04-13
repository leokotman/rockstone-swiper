import style from "./DatePage.module.css";

function DatePage(props) {
  let getCurrentDate = () => {
    debugger;
    setInterval(() => {
      let fullDate = new Date();

      return fullDate;
    }, 1000);
  };

  return (
    <div className={style.date_page}>
      <h1>Current date:</h1>
      <span>{getCurrentDate()}</span>
    </div>
  );
}

export default DatePage;
