import React from 'react'


const Home = () => {
  return (
    <div className='my-3'>
      <h2>Add a Note</h2>
      <div className="container my-3">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="button" class="btn btn-primary">Primary</button>
      </div>
      <h2>Your Notes</h2>
    </div>
  )
}

export default Home
