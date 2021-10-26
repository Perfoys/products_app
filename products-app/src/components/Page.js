import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Add from "./Add";
import Header from "./sup/Header";
import Product from "./Product";
import Products from "./Products";
import Update from "./Update";
import Home from "./Home";
import Auth from "./Auth";
import PrivateRoute from "./sup/PrivateRoute";

const Page = () => {

    return (
        <Router>
                <Header></Header>
                {
                    localStorage.token ? 
                        <Redirect to="/" /> 
                    : 
                        <Redirect to="/login" />
                }
                <Switch>
                    <Route exact path='/' component={Home} />
                    <PrivateRoute path='/products' component={Products} />
                    <PrivateRoute path='/add-product' component={Add} />
                    <Route path="/product/:id" component={Product}></Route>
                    <Route path="/update-product/:id" component={Update}></Route>
                    <Route path="/login" component={Auth}></Route>
                </Switch>    
        </Router>
    )
}

export default Page