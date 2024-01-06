import React from 'react'

const Contacts = () => {
  return (
    <div className="flex flex-col items-center max-w-screen-lg mx-auto justify-center h-full px-8 text-center mb-12">
      <div className="text-bp-primary-color text-3xl font-serif font-semibold mt-12 mb-4">Let's Connect!</div>

      <div className="form-container flex flex-col items-center max-w-screen-lg mx-auto justify-center h-full px-8 text-center">
        <form className=" border border-bp-primary-color">

          <div>
            <label htmlFor="name" className="flex flex-start ml-4 mt-4 text-bp-primary-color">Name</label>
            <div>
              <input type="text" name="name" id="name" placeholder="Your name" className="flex flex-start ml-4 mr-4 mt-2 border border-bp-secondary-color" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="flex flex-start ml-4 mt-4 text-bp-primary-color">Email</label>
            <input type="email" name="email" id="email" placeholder="Your email" className="flex flex-start ml-4 mr-4 mt-2 border border-bp-secondary-color" />
          </div>

          <div>
            <label htmlFor="message" className="flex flex-start ml-4 mt-4 text-bp-primary-color">Message</label>
            <div>
              <textarea name="message" id="message" placeholder="Your message" className="flex flex-start ml-4 mr-4 mt-2 mb-12 border border-bp-secondary-color"/>
            </div>
          </div>
        <button type="submit" className="bg-bp-primary-color rounded-lg h-18 w-20 m-2">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contacts;