import React from 'react';
import{useState} from 'react';

function MembersForm(props) {

// Setting up State for the Form
  const [teamMem, setTeamMem] = useState({
    jerseyNo: 0,
    name: '',
    role: ''
  });

// Using Computed Properties
  const changes = e => {
    setTeamMem({
      ...teamMem,
      [e.target.name]: e.target.value
    });
  };

// Preventing default on Form
  const onSubmit = e => {
    e.preventDefault();
    props.addNewMember(teamMem);
    setTeamMem({
      jerseyNo: '',
      name: '',
      role: ''
    });
  };

// Rendering Form
  return(
    <form onSubmit={onSubmit}>
      {/* NAME */}
      <label htmlFor="name">Member Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        value={teamMem.name}
        onChange={changes}
      />
      {/* JERSEY NUMBER */}
      <label htmlFor="jerseyNo">Jersey NO: </label>
      <input
        type="number"
        id="jerseyNo"
        name="jerseyNo"
        value={teamMem.jerseyNo}
        onChange={changes}
      />
      {/* ROLE */}
      <label htmlFor="role">Position: </label>
      <input
        type="text"
        id="role"
        name="role"
        value={teamMem.role}
        onChange={changes}
      />
      <button type="submit">Add Member</button>
    </form>
  );
}

export default MembersForm;
