import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Add from "./Add";
import Header from "./Header";
import Product from "./Product";
import Products from "./Products";
import Update from "./Update";
import Home from "./Home";
import Auth from "./Auth";
import PrivateRoute from "./PrivateRoute";
import { useEffect, useState } from "react";


const Page = () => {
    const [authed, setAuthed] = useState()

    useEffect(() => {
        if (localStorage.token) {
            setAuthed(true)
        }
        else {
            setAuthed(false)
        }
    }, [])

    return (
        <Router>
            <Header></Header>
            {
                authed ? 
                <Redirect to="/home" /> 
                : 
                <Redirect to="/login" />
            }
            <Switch>
                <PrivateRoute authed={authed} path='/home' component={Home} />
                <PrivateRoute authed={authed} path='/products' component={Products} />
                <PrivateRoute authed={authed} path='/add-product' component={Add} />
                <Route path="/product/:id" component={Product}></Route>
                <Route path="/update-product/:id" component={Update}></Route>
                <Route path="/login" component={Auth}></Route>
            </Switch>      
        </Router>
    )
}

export default Page