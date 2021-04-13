let store = {
  state: {
    inputMessagePage: {
      messages: [],
    },
  },

  getState() {
    return this._state;
  },
};

export let addMessage = (messageText) => {
  debugger;
  let newMessage = {
    id: store.state.inputMessagePage.messages.length,
    message: messageText,
  };
  store.state.inputMessagePage.messages.push(newMessage);
};

export default store;
