import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Add from "./Add";
import Header from "./Header";
import Product from "./Product";
import Products from "./Products";
import Update from "./Update";
import Home from "./Home";
import Auth from "./Auth";


const Page = () => {

    return (
        <Router>
            <Header></Header>
            {
                localStorage.token ? <Redirect to="/" /> : <Redirect to="/login" />
            }
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/products" component={Products}></Route>
                <Route path="/product/:id" component={Product}></Route>
                <Route path="/add-product" component={Add}></Route>
                <Route path="/update-product/:id" component={Update}></Route>
                <Route path="/login" component={Auth}></Route>
            </Switch>
        </Router>
    )
}

export default Page