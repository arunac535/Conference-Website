import React from 'react'

export default function Button({ text , link}) {

  const handleRedirect = () => {
    window.open(link);
  };

  return (
    <button className='btn btn-primary' onClick={handleRedirect}>{text}</button>
  )
}
