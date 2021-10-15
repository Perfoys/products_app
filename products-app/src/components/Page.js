import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Add from "./Add";
import Header from "./Header";
import Product from "./Product";
import Products from "./Products";
import Update from "./Update";

const Page = () => {
    return (
        <Router>
            <Header></Header>

            <Switch>
                <Route exact path="/"></Route>
                <Route path="/products" component={Products}></Route>
                <Route path="/products/:id" component={Product}></Route>
                <Route path="/add-product" component={Add}></Route>
                <Route path="/update-product" component={Update}></Route>
            </Switch>
        </Router>
    )
}

export default Page