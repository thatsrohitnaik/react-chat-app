import React from "react";
import { inject, observer } from "mobx-react";
import Paper from "@material-ui/core/Paper";
import Message from "../message/";

@inject("ChatStore")
@observer
class Panel extends React.Component {
  render() {
    const { chats, userId } = this.props.ChatStore;

    this.props.ChatStore.getChatBetween();

    console.log(userId);

    return (
      <Paper>
        {chats.map((chat, index) => {
          return <Message key={index} data={chat} userId={userId} />;
        })}
      </Paper>
    );
  }
}

export default Panel;
