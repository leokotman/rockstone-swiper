import './App.css';
import InputMessagePage from "./components/MessagesPage/InputMessagePage";

import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";

function App(props) {
  return (
    <div className="App">
      <Carousel interval={null} controls={false} touch={true} keyboard={true}>
        <Carousel.Item>
          <InputMessagePage
            inputMessagePage={props.state.inputMessagePage}
            addMessage={props.addMessage}
            updateNewMessageText={props.updateNewMessageText}
          />
          {/* <img className="d-block w-100" alt="First slide" /> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
