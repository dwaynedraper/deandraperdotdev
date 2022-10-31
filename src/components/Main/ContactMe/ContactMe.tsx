import React, { useState } from 'react'

export default function ContactMe() {
  const [formData, setformData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setformData({ ...formData, [e.currentTarget.name]: e.currentTarget.value })
  }

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    fetch('http://localhost:3022/send-sms', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => console.log(res))
  }

  return (
    <section className="clean-block clean-form dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Contact Me</h2>
          <p>If you would like to contact me, you may do so by filling out this form. Leave me an email or phone number, and I'll reach out as soon as I can.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3"><label className="form-label">Name</label><input className="form-control" type="text" id="name" name="name" value={formData.name} onChange={handleChange} /></div>
          <div className="mb-3"><label className="form-label">Subject</label><input className="form-control" type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} /></div>
          <div className="mb-3"><label className="form-label">Phone Number</label><input className="form-control" type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} /></div>
          <div className="mb-3"><label className="form-label">Email or Phone Number</label><input className="form-control" type="email" id="email" name="email" value={formData.email} onChange={handleChange} /></div>
          <div className="mb-3"><label className="form-label">Your Message</label><textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} ></textarea></div>
          <div className="mb-3"><button className="btn btn-primary" type="submit">Send Request</button></div>
        </form>
      </div>
    </section>
  )
}
