import { useState } from "react";
import { connect } from "react-redux";
import { getProducts } from "../actions/products";
import { deleteProduct } from "../actions/delete";
import Item from "./Item";

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { store } from "../store";
import { useHistory } from "react-router";
import { getProductById } from "../actions/product";


const Products = ({ products, createdProducts }) => {
    const [amount, setAmount] = useState(8)
    const [created, setCreated] = useState(false)
    const [checked, setChecked] = useState(false)
    const history = useHistory()

    if (!products.length) {
        store.dispatch(getProducts())
    }

    const handleClick = async (id) => {
        store.dispatch(getProductById(id))
            .then(() => history.push(`/product/${id}`))
            .catch(err => console.log(err))
        
    }

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you wish to delete this item?'))
            store.dispatch(deleteProduct(id))
    }

    const handleUpdate = (id) => {
        history.push(`/update-product/${id}`)
    }

    const handleChange = () => {
        if (checked) {
            setChecked(false)
        }
        else {
            setChecked(true)
        }
    }

    return (
            <div className="App-products">
                <div className="Products-tabs">
                    <Button variant="outlined" onClick={() => {setCreated(false)}}>Existed</Button>
                    <Button variant="outlined" onClick={() => {setCreated(true)}}>Created</Button>
                </div>
                <div className="Products-settings">
                    <Button variant="contained" onClick={() => {setAmount(8)}}>1 - 8</Button>
                    <Button variant="contained" onClick={() => {setAmount(16)}}>1 - 16</Button>
                    <Button variant="contained" onClick={() => {setAmount(20)}}>1 - 20</Button>
                    <FormControlLabel disabled={created ? false : true} control={<Switch checked={checked} onChange={handleChange}/>} label="Published" />
                </div>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        created ? 
                            createdProducts.map((item, index) => {
                                if (index < amount) {
                                    if (checked && item.publish) {
                                        return (
                                            <Grid item xs={4} lg={3} xl={2} key={index} className="Product-card">
                                                <Item item={item} handleClick={handleClick} handleDelete={handleDelete} handleUpdate={handleUpdate} ></Item>
                                            </Grid>
                                        )
                                    }
                                    else if (!checked && !item.publish) {
                                        return (
                                            <Grid item xs={4} lg={3} xl={2} key={index} className="Product-card">
                                                <Item item={item} handleClick={handleClick} handleDelete={handleDelete} handleUpdate={handleUpdate}></Item>
                                            </Grid>
                                        )
                                    }
                                }
                                return true
                            })
                        :
                            products.map((item, index) => {
                                if (index < amount) {
                                    return (
                                        <Grid item xs={4} lg={3} xl={2} key={index} className="Product-card">
                                            <Item item={item} handleClick={handleClick} handleDelete={handleDelete} handleUpdate={handleUpdate}></Item>
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
    createdProducts: state.app.added.products,
})

export default connect( mapStateToProps, { getProducts })(Products)