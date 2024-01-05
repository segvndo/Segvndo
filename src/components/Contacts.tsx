import React from 'react'

const Contacts = () => {
  return (
    <div>
      <div>Let's Connect!</div>

      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Your name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Your email" />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" placeholder="Your message" />
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contacts;