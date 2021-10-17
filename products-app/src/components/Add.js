import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import { useState, useCallback } from 'react';
import { addProduct } from '../actions/add';
import store from '../store';

const Add = () => {
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: '',
        image: '',
        category: '',
        date: '',
        publish: false,
    })

    const handleSubmit = (event) => {
        const dateNow = new Date().toString()
        setProduct(state => ({...state, date: dateNow}))
        store.dispatch(addProduct(product))
        event.preventDefault();
    }

    const handleChange = useCallback(
        ({target: {name, value}}) => setProduct(state => ({...state, [name]: value}), [])
    )

    return (
        <div className="App-add">
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

export default Add