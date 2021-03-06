import React from 'react';
import{useState} from 'react';
import styled from 'styled-components';
import './comp-styles.css';

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

// Styles . . .
  const Button = styled.button`
    margin-top: 2rem;
    border-radius: 5px;
  `;

// Rendering Form
  return(
    <form onSubmit={onSubmit}>
      {/* NAME */}
      <div className="info">
        <label htmlFor="name">Member Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={teamMem.name}
          onChange={changes}
          className="Input"
        />
      </div>
      {/* JERSEY NUMBER */}
      <div className="info">
        <label htmlFor="jerseyNo">Jersey NO: </label>
        <input
          type="number"
          id="jerseyNo"
          name="jerseyNo"
          value={teamMem.jerseyNo}
          onChange={changes}
          className="Input"
        />
      </div>
      {/* ROLE */}
      <div className="info">
        <label htmlFor="role">Position: </label>
        <input
          type="text"
          id="role"
          name="role"
          value={teamMem.role}
          onChange={changes}
          className="Input"
        />
      </div>
      <Button type="submit">Add Member</Button>
    </form>
  );
}

export default MembersForm;
