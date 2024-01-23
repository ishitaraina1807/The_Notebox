import Notes from './Notes';

const Home = (props) => {
const {showAlert} = props;
  return (
    <div className='mx-20'>
      <Notes showAlert={showAlert} />
    </div>
  )
}

export default Home
