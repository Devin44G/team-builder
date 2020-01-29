import React from "react";

function Members(props) {

  return (
    <div>
      {props.teamMem.map(member => (
        <div key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.jerseyNo}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Members;
