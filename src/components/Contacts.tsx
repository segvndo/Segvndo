import React from 'react'

const Contacts = () => {
  return (
    <div className="flex flex-col items-center max-w-screen-lg mx-auto justify-center h-full px-8 text-center m-12">
      <div className="text-bp-primary-color text-3xl font-serif font-semibold m-12">Let's Connect!</div>

      <div className="form-container flex flex-col items-center max-w-screen-lg mx-auto justify-center h-full px-8 text-center">
        <form className=" bg-bp-primary-color">
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
    </div>
  )
}

export default Contacts;