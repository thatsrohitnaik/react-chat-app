import { action, observable } from "mobx";

class ChatStore {
  @observable chatHistory = [];
  @observable chats = [];
  @observable userId = "s1";

  @action.bound
  getChatHistory() {
    this.chatHistory = [
      {
        userId: "s1",
        userName: "Super One",
        userStatus: "online",
        userImagePath: "no path"
      },
      {
        userId: "s4",
        userName: "Super Four",
        userStatus: "offline",
        userImagePath: "no path"
      }
    ];
  }

  @action.bound
  getChatBetween() {
    this.chats = [
      {
        message: "hello world",
        senderId: "s1",
        receiverId: "s2",
        time: null
      },
      {
        message: "hello world",
        senderId: "s1",
        receiverId: "s2",
        time: null
      },
      {
        message: "hello world",
        senderId: "s1",
        receiverId: "s2",
        time: null
      },
      {
        message: "hey ",
        senderId: "s2",
        receiverId: "s1",
        time: null
      },
      {
        message: "hey ",
        senderId: "s2",
        receiverId: "s1",
        time: null
      },
      {
        message: "hey ",
        senderId: "s2",
        receiverId: "s1",
        time: null
      },
      {
        message: "hey ",
        senderId: "s2",
        receiverId: "s1",
        time: 1607617144
      },
      {
        message: "hey ",
        senderId: "s2",
        receiverId: "s1",
        time: 1607617145
      },
      {
        message: "hey ",
        senderId: "s1",
        receiverId: "s2",
        time: 1607617146
      },
      {
        message: "hey ",
        senderId: "s1",
        receiverId: "s2",
        time: 1607617148
      },
      {
        message: "hey ",
        senderId: "s2",
        receiverId: "s1",
        time: 1607617149
      }
    ];
  }
}

export default new ChatStore();
