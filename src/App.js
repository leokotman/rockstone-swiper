import './App.css';
import InputMessagePage from "./components/MessagesPage/InputMessagePage";

import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";
import DatePage from './components/DatePage/DatePage';

function App(props) {
  return (
    <div className="App">
      <Carousel
        interval={null}
        controls={false}
        touch={true}
        keyboard={true}
        className="h-75"
      >
        <Carousel.Item>
          <InputMessagePage
            inputMessagePage={props.state.inputMessagePage}
            addMessage={props.addMessage}
            updateNewMessageText={props.updateNewMessageText}
          />
        </Carousel.Item>
        <Carousel.Item>
          <DatePage />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
