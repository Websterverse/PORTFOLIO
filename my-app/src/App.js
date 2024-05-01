import './Home.css';
import NAV from './Components/NAV'
import HOME from './Components/HOME'
import Social from './Components/SocialLink'
// import ABOUT from './Components/ABOUT'
import ABOUT  from './Components/About';
import PORTFOLIO from './Components/Portfolio'
import EXPERIENCE from './Components/Experience'
import CONTACT from "./Components/Contact"
function App() {
  return (
<>
{/* <h1 className='text-4xl font-bold font-signature ' >HELLO </h1> */}
<NAV/>
<HOME/>

<Social/>

<ABOUT/>

<PORTFOLIO/>

<EXPERIENCE/>

<CONTACT/>
</>
  );
}

export default App;
