import {Route, Switch} from'react-router-dom';
import Inicio from '../views/Inicio'
import Contacto from '../views/Contacto'; 
import Error404 from '../views/404';
import Nosotros from '../views/Nosotros';
export default function router(){
    return(
            <Switch>
                <Route exact path='/'>
                    <Inicio/>
                </Route>
                <Route path='/contacto'>
                    <Contacto/>
                </Route>
                <Route path='/nosotros'>
                    <Nosotros/>
                </Route>
                <Route>
                    <Error404/>
                </Route>
            </Switch>
    );
}