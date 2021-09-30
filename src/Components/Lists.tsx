import { render } from "@testing-library/react";
import React from "react";
import { IState as IProps} from "../App"

const List: React.FC<IProps> = ({people}) => {
  //we're trying to get the program to return the jsx components rather than having the jsx generated in the app.tsx file

    const renderList = (): JSX.Element[] => {
      return people.map((person) => {
        return (
          <li className="List">
            <div className="List-header">
              <img className="List-img" src={person.img} />
              <h2>{person.name}</h2>
            </div>
            <p>{person.age} years old</p>
            <p className="List-note">{person.note}</p>
          </li>
        )
      })
    }
    // so it looks like you can have functions local to this const
    return (
      <ul>
        {renderList()}
      </ul>
    )
}

export default List

//TODO: https://youtu.be/jrKcJxF0lAU?t=2438