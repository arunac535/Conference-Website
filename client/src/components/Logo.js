// import React from 'react'

// export default function Logo() {
//   return (
//     <div>Logo</div>
//   )
// }

import React from 'react';
import nitk from "./nitk_logo.png";
import im2 from "./download.png"
const Logo = () => {
  return (
    <header style={header}>
      <div style={leftimage}>
        <img src={nitk} alt="left" style={image} />
      </div>
      <div style={text}>
        <h1>ASSETS</h1>
      </div>
      <div style={rightimage}>
        <img src={im2} alt="right" style={image} />
      </div>
    </header>
  );
};


const header = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
};

const leftimage = {
  marginRight: '10px',
};

const rightimage = {
  display: 'flex',
};

const text = {
  flex: 1,
};

const image = {
  width: '100px',
  height: '100px',
  borderRadius: '10%', 
};
export default Logo;
