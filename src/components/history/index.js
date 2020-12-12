import React from "react";
import Cell from "../cell/";
import "./style.css";
import List from "@material-ui/core/List";

import { inject, observer } from "mobx-react";

@inject("ChatStore")
@observer
class History extends React.Component {
  render() {
    const { chatHistory, senderId } = this.props.ChatStore;

    this.props.ChatStore.getChatHistory();

    return (
      <List>
        {chatHistory.map((cell, index) => (
          <Cell key={index} data={cell} senderId={senderId} />
        ))}
      </List>
    );
  }
}

export default History;
