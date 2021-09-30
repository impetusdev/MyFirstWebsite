import React, {useState} from 'react';
// import logo from './logo.svg'; // this is how the logo came into view
import './App.css';
import AddToList from './Components/AddToList';
import List from './Components/Lists';

export interface IState{
  people:{
    img: string
    name: string
    age: number
    note?: string
  }[]
}

function App() {
  // here I am declaring an object. 

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Kobe Byrant",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuJs_eD_YYejFPtXMkp_WhRW41Xz0DSlxtmImgsOq5hUMjDJ1",
      age: 36,
      note: "Allergic to staying on the same team"
    }
  ])

  // people.map(person => {
  //   person.name
  // })
  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
