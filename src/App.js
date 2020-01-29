import React from 'react';
import {useState} from 'react';
import Members from './components/Members';
import MembersForm from './components/MembersForm';
import './App.css';

function App() {

// Setting up State
  const [teamMems, setTeamMems] = useState([]);

// Function for adding new members
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      jerseyNo: member.jerseyNo,
      name: member.name,
      role: member.role
    }
    setTeamMems([...teamMems, newMember]);
  };

  return (
    <div className="App">
      <MembersForm addNewMember={addNewMember}/>
      <Members teamMem={teamMems}/>
    </div>
  );
}

export default App;
