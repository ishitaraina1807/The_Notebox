import Notes from './Notes';

const Home = (props) => {
const {showAlert} = props;
  return (
    <div className='lg:mx-20 mx-8'>
      <Notes showAlert={showAlert} />
    </div>
  )
}

export default Home
