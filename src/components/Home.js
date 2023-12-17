import Notes from './Notes';

const Home = () => {

  return (
    <div className='my-3'>
      <h2>Add a Note</h2>
      <div className="container my-3">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Add Title</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Leetcode daily quest..." />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Add Description</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="button" className="btn btn-dark">Add note</button>
      </div>
      <Notes/>
    </div>
  )
}

export default Home
