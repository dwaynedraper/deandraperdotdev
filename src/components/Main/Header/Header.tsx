import React from 'react'
import '../Main.css'

export default function Header() {

  var sectionStyle = {
    // width: "100%",
    backgroundPositionX: "50%",
    backgroundPositionY: "100%",
    backgroundImage: "url(https://deandraper.s3.us-east-2.amazonaws.com/iMacAndMBP.jpg)",
    color: "rgba(9, 162, 255, 0.85)"
  };
  return (
    <section className="clean-block clean-hero" style={sectionStyle}>
      <div className="text jet-brains">
        <h2 className='jet-brains' style={{ fontSize: "72pt" }}>Dean Draper</h2>
        <p className='jet-brains' style={{ fontSize: "32pt" }}>React Web App Developer</p>
      </div>
    </section >
  )
}
