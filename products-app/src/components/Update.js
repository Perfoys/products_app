import { store } from "../store";
import { updateProduct } from "../actions/update";
import { deleteProduct } from "../actions/delete";
import { connect } from "react-redux";
import { useState, useCallback, useEffect } from "react";

import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useHistory } from "react-router";

const Update = ({ addedproducts }) => {
    const [ state, setState] = useState({
        id: '',
        title: '',
        price: '',
        description: '',
        image: '',
        category: '',
        date: '',
        publish: false,
    })
    const history = useHistory()

    useEffect(() => {
        const id = (window.location.href).split('/')[4]
        addedproducts.filter(item => item.id === id.toString()).map(product => {
            setState(product)
        })
    }, [])

    const handleSubmit = (event) => {
        const dateNow = new Date().toString()
        setState(state => ({...state, date: dateNow}))
        store.dispatch(updateProduct(state))
        console.log(typeof state.publish)
        history.push("/products")
    }

    const handleChange = useCallback(
        ({target: {name, value}}) => setState(state => ({...state, [name]: value}), [])
    )

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you wish to delete this item?'))
            store.dispatch(deleteProduct(id))
    }

    return (
        <div className="App-update">
            <h2>Update product</h2>
            <form  onSubmit={handleSubmit} className="Add-form">
                <FormControl>
                    <InputLabel htmlFor="title">Product title</InputLabel>
                    <Input name="title" type="text" value={state.title} onChange={handleChange} required/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="description">Product description</InputLabel>
                    <Input name="description" type="text" value={state.description} onChange={handleChange} required/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="price">Product price</InputLabel>
                    <Input name="price" type="text" value={state.price} onChange={handleChange} required/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="category">Product category</InputLabel>
                    <Input name="category" type="text" value={state.category} onChange={handleChange} required/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="image">Product image</InputLabel>
                    <Input name="image" type="text" value={state.image} onChange={handleChange} required/>
                </FormControl>
                <FormControl>
                    <FormControlLabel control={<Checkbox color="secondary" checked={state.publish} onChange={() => setState(state=> ({...state, publish: !state.publish}))}></Checkbox>} label="Publish" name="publish" />
                </FormControl>
                <Button color="secondary" type="submit">Submit</Button>
                <Button color="secondary" onClick={() => handleDelete(state.id)}>Delete</Button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    addedproducts: state.app.added.products,
})

export default connect( mapStateToProps, { updateProduct })(Update)