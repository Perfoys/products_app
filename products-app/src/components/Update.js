import store from "../store";
import { updateProduct } from "../actions/update";
import { getProductById } from "../actions/product";
import { connect } from "react-redux";
import isEmpty from "../helper";
import { useState, useCallback } from "react";

import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const Update = ({ product }) => {
    const [ state, setState] = useState(product)

    if (isEmpty(product)) {
        const id = (window.location.href).split('/')[4]
        store.dispatch(getProductById(id))
    }

    const handleSubmit = (event) => {
        const dateNow = new Date().toString()
        setState(state => ({...state, date: dateNow}))
        store.dispatch(updateProduct(state))
        event.preventDefault();
    }

    const handleChange = useCallback(
        ({target: {name, value}}) => setState(state => ({...state, [name]: value}), [])
    )

    return (
        <div className="App-update">
            <form  onSubmit={handleSubmit} className="Add-form">
                <FormControl>
                    <InputLabel htmlFor="title">Product title</InputLabel>
                    <Input name="title" type="text" onChange={handleChange}/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="description">Product description</InputLabel>
                    <Input name="description" type="text" onChange={handleChange}/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="price">Product price</InputLabel>
                    <Input name="price" type="text" onChange={handleChange}/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="category">Product category</InputLabel>
                    <Input name="category" type="text" onChange={handleChange}/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="image">Product image</InputLabel>
                    <Input name="image" type="text" onChange={handleChange}/>
                </FormControl>
                <FormControl>
                    <FormControlLabel control={<Checkbox color="secondary"></Checkbox>} label="Publish" name="publish" onChange={handleChange}/>
                </FormControl>
                <Button color="secondary" type="submit">Submit</Button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    product: state.app.product.product,
})

export default connect( mapStateToProps, { updateProduct })(Update)