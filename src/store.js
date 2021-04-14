let store = {
  _state: {
    inputMessagePage: {
      messages: [],
      newMessage: "",
    },
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

};

window.store = store;

export default store;
