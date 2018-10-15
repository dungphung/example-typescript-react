import * as React from "react";
import * as GenericList from "./GenericList";

const StringList = ["a", "b", "c"];
const NumberList = [1, 2, 3];
const User = [{ name: "dung", id: 1 }, { name: "dat", id: 2 }];

export default class Generict extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <GenericList.StringList items={StringList} />
        <GenericList.NumberList items={NumberList} />
        <GenericList.UserList items={User} />
      </div>
    );
  }
}
