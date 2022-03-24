import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import Favoritos from "./Pages/Favoritos";
import Filme from "./Pages/Filme";

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact to="/" component={Home} />
                <Route exact to="/favoritos" component={Favoritos} />
                <Route exact to="/filme" component={Filme} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;