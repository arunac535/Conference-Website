import React from 'react'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar/Navbar'

function Sponsorship() {
  return (
    <>
    <header>
      <Logo />
      <Navbar />
    </header>

    <main style={{display:'flex' , flexDirection:'column', justifyContent:'center'}}>
        <Heading text="Sponsors" />

        <table tyle={{ border: '1px solid black'}}>
                <tr>
                    <th style={{ border: '1px solid black' }}>Category</th>
                    <th style={{ border: '1px solid black' }}>Fee</th>
                    <th style={{ border: '1px solid black' }}>Entitlements</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}  style={{ border: '1px solid black' }}>
                            <td style={{ border: '1px solid black' }}>{val.category}</td>
                            <td style={{ border: '1px solid black' }}>{val.fee}</td>
                            <td style={{ border: '1px solid black' }}>
                    <ul style={{ border: '1px solid black' }}>
                        {Object.keys(val.entitlement).map((entKey, entIndex) => (
                            <li key={entIndex}> 
                                {val.entitlement[entKey]}
                            </li>
                        ))}
                    </ul>
                </td>
                        </tr>
                    )
                })}
            </table>
    </main>
    </>
  )
}

export default Sponsorship