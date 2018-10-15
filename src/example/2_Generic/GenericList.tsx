import * as React from "react";

export interface IGenericListProps<T> {
  items: T[];
}

class Items<T> extends React.Component<IGenericListProps<T>, {}> {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => {
          if (item["name"]) {
            return <li key={index}>{item["name"]}</li>;
          }
          return <li key={index}>{item}</li>;
        })}
      </ul>
    );
  }
}

class StringList extends Items<string> {}

class NumberList extends Items<number> {}

export interface IUser {
  id: number;
  name: string;
}

class UserList extends Items<IUser> {}

export { StringList, NumberList, UserList };
