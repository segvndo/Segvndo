import React from 'react'

const Contacts = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-bp-primary-color text-3xl font-serif font-semibold mt-12 mb-4 ">Let's Connect!</div>

      <div className="max-w-xl mx-auto px-8 text-center">
        <form className="max-w-screen-lg mx-auto justify-center h-full px-8 text-center mb-12 border border-bp-primary-color rounded-xl ">

          <div className="mr-8">
            <label htmlFor="name" className="flex flex-start ml-4 mt-4 text-bp-primary-color">Name</label>
            <div >
              <input type="text" name="name" id="name" placeholder="Enter your name" className="flex flex-start ml-4 mr-4 mt-2 border border-bp-secondary-color rounded-md w-full pl-2" />
            </div>
          </div>

          <div className="mr-8">
            <label htmlFor="email" className="flex flex-start ml-4 mt-4 text-bp-primary-color">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter email" className="flex flex-start ml-4 mr-4 mt-2 border border-bp-secondary-color rounded-md pl-2 w-full" />
          </div>

          <div className="mr-8">
            <label htmlFor="message" className="flex flex-start ml-4 mt-4 text-bp-primary-color">Message</label>
            <div>
              <textarea name="message" id="message" placeholder="Enter your message" className="flex flex-start ml-4 mr-4 mt-2 mb-4 border border-bp-secondary-color rounded-md pl-2 w-full" style={{ height: '150px' }}/>
            </div>
          </div>
        <button type="submit" className="bg-bp-primary-color rounded-lg h-18 w-28 mt-2 mb-6">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contacts;