import React from 'react'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar/Navbar'
import Heading from '../components/Heading'

const data=[
  {
    category:"Principal Sponsor",
    fee:"INR 10.0 Lakhs",
    entitlement:{1:"Display of logo at the conference backdrop",
      2:"Display of banners at the conference venue",
      3:"12 free delegates",
      4:"Company logo as Principal sponsor on the website",
      5:"Full page colour advertisement in the proceedings",			
    }
  },

  {
    category:"Co-Sponsor",
    fee:"INR 8.0 Lakhs",
    entitlement:{1:"Display of logo at the conference backdrop",
      2:"Display of banners at the conference venue",
      3:"10 free delegates",
      4:"Company logo as Co-sponsor on the website",		
    }
  },

  {
    category:"Platinum Sponsor",
    fee:"INR 6.0 Lakhs",
    entitlement:{1:"Display of logo at the conference backdrop",
      2:"Display of banners at the conference venue",
      3:"8 free delegates",
      4:"Company logo as Platinum sponsor on the website",			
    }
  },

  {
    category:"Gold Sponsor",
    fee:"INR 4.0 Lakhs",
    entitlement:{1:"Display of logo at the conference backdrop",
      2:"Display of banners at the conference venue",
      3:"4 free delegates",
      4:"Company logo as Gold sponsor on the website",		
    }
  },

  {
    category:"Dinner Sponsor",
    fee:"INR 4.0 Lakhs",
    entitlement:{1:"Display of logo at the conference backdrop",
      2:"Display of banners at the conference venue",
      3:"4 free delegates",
      4:"Company logo as Dinner sponsor on the website",		
    }
  },

  {
    category:"Lunch Sponsor",
    fee:"INR 4.0 Lakhs",
    entitlement:{1:"Display of logo at the conference backdrop",
      2:"Display of banners at the conference venue",
      3:"4 free delegates",
      4:"Company logo as Lunch sponsor on the website",		
    }
  }
]   

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