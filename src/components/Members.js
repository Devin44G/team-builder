import React from "react";
import styled from 'styled-components';

function Members(props) {

  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5rem;
  `;
  const Card = styled.div`
    border-radius: 5px;
    border: solid 2px black;
    text-align: center;
    width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
  `;

  return (
    <Container>
      {props.teamMem.map(member => (
        <Card key={member.id}>
          <div className="bg"></div>
          <h2>{member.name}</h2>
          <p>#{member.jerseyNo}</p>
          <p>{member.role}</p>
        </Card>
      ))}
    </Container>
  );
};

export default Members;
