// import React from 'react'

// export default function Logo() {
//   return (
//     <div>Logo</div>
//   )
// }




import React from 'react';
import nitk from "./../assets/nitk_logo.png";
import pedas from "../assets/pedas.png";
import ieee from "./../assets/ieee.png"
const Logo = () => {
  return (
    <header style={header}>
      <div style={leftimage}>
        <img src={pedas} alt="left" style={image1} />
      </div>
      <div style={text}>
        <h1></h1>
      </div>
      <div style={rightimage}>
        <img src={nitk} alt="right" style={image2} />
        <img src={ieee} alt="right" style={image3} />
        
      </div>
    </header>
  );
};


const header = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '5px',
};

const leftimage = {
  marginRight: '20px',
};

const rightimage = {
  display: 'flex',
};

const text = {
  flex: 1,
};

const image1 = {
  width: '330px',
  borderRadius:'',
}

const image2 = {
  width: '90px',
  height: '',
  borderRadius: '10%', 
  marginRight:'20px'
};

const image3 = {
  width: '90px',
  borderRadius: '',
}

export default Logo;
