import React from 'react';
import BasicModal from './BasicModal';

const styleimg = {
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  width: "500px",
}

function Home () {
  return (
      <div>
        <img src='./homepage.png' alt="avatar-robot" style={styleimg} />        
        <BasicModal message={"Mensahe re piola"}/>
      </div>
  );
}

export default Home;