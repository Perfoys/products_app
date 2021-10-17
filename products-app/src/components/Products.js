import { useState } from "react";
import { connect } from "react-redux";
import { getProducts } from "../actions/products";
import { deleteProduct } from "../actions/delete";
import Item from "./Item";

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import store from "../store";


const Products = ({ products }) => {
    const [amount, setAmount] = useState(8)

    if (!products.length) {
        store.dispatch(getProducts())
    }

    const handleClick = (id) => {
        window.location.assign(`http://localhost:3000/product/${id}`);
    }

    const handleDelete = (id) => {
        store.dispatch(deleteProduct(id))
    }


    return (
        <div className="App-products">
            <div className="Products-settings">
                <Button variant="contained" onClick={() => {setAmount(8)}}>1 - 8</Button>
                <Button variant="contained" onClick={() => {setAmount(16)}}>1 - 16</Button>
                <Button variant="contained" onClick={() => {setAmount(20)}}>1 - 20</Button>
            </div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    products.map((item, index) => {
                        if (index < amount) {
                            return (
                                <Grid item xs={4} lg={3} xl={2} key={index} className="Product-card">
                                    <Item item={item} handleClick={handleClick} handleDelete={handleDelete}></Item>
                                </Grid>
                            )
                        }
                        return true
                    })
                }
            </Grid>

        </div>
    )
}

const mapStateToProps = (state) => ({
    products: state.app.products.products,
})

export default connect( mapStateToProps, { getProducts })(Products)