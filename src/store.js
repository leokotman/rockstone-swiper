let store = {
  _state: {
    inputMessagePage: {
      messages: [],
      newMessage: "",
    },
    datePage: {
        currentDate: '',
    }
  },

  getState() {
    return this._state;
  },
  _rerenderPage() {
    console.log("state is changed");
  },

  addMessage() {
    debugger;
    let newMessage = {
      id: this._state.inputMessagePage.messages.length,
      message: this._state.inputMessagePage.newMessage,
    };
    this._state.inputMessagePage.messages.push(newMessage);
    this._state.inputMessagePage.newMessage = "";
    this._rerenderPage(this._state);
  },

  updateNewMessageText(newMessage) {
    this._state.inputMessagePage.newMessage = newMessage;
    this._rerenderPage(this._state);
  },
  subscribe(observer) {
    this._rerenderPage = observer;
  },

  getCurrentDate(){
    debugger;
    setInterval(() => {
      let fullDate = new Date();

      return fullDate;
    }, 1000);
  }
};

window.store = store;

export default store;
