import { Route , Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Navbar from './component/Navbar';
import Movie1 from './component/Movie1'
import Movie2 from './component/Movie2'
import Movie3 from './component/Movie3'
import Movie4 from './component/Movie4'
import Movie5 from './component/Movie5'
import './App.css';

function App(){
  return(
    <>
    <Navbar/>
    <Switch>
        <Route  exact path='/' component={Movie1} />
        <Route  path='/movie2' component={Movie2} />
        <Route  path='/movie3' component={Movie3} />
        <Route  path='/movie4' component={Movie4} />
        <Route  path='/movie5' component={Movie5} />
    </Switch>
    </>
    )
}

export default App;
