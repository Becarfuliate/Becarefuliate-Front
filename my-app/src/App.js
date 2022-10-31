import React, {useState} from 'react' 
import HomepageLogin from './componentes/HomePageLogin';
import HomePageUser from "./componentes/HomePageUser";

function App() {
  const [login, setLogin] = useState(false);
  React.useEffect(() => {
    if (localStorage.getItem("user")) setLogin(true)
    else setLogin(false);
  }, [localStorage]);
  if(!login) return <HomePageUser/>;
  else return <HomepageLogin/>;
}
//aA1111#####

export default App;
