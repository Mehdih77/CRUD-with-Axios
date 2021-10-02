import Home from './components/Home';
import Update from './components/Update';
import {Switch, Route} from "react-router-dom";

function App() {

    return (
        <section className='app'>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/update/:id' exact component={Update}/>
            </Switch>
        </section>
    );
}

export default App;
