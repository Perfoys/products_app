import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import { useState } from 'react';
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

    const handleSubmit = (data) => {

    }

    return (
        <div className="App-add">
            <FormGroup onSubmit={handleSubmit} className="Add-form">
                <FormControl>
                    <InputLabel htmlFor="title">Product title</InputLabel>
                    <Input id="title" type="text" value={product.title} onChange={(e) => setProduct(e.target.value)}/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="description">Product description</InputLabel>
                    <Input id="description" type="text" value={product.description} onChange={(e) => setProduct(e.target.value)}/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="price">Product price</InputLabel>
                    <Input id="price" type="text" value={product.price} onChange={(e) => setProduct(e.target.value)}/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="category">Product category</InputLabel>
                    <Input id="category" type="text" value={product.category} onChange={(e) => setProduct(e.target.value)}/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="image">Product image</InputLabel>
                    <Input id="image" type="text" value={product.image} onChange={(e) => setProduct(e.target.value)}/>
                </FormControl>
                <FormControl>
                    <FormControlLabel control={<Checkbox color="secondary"></Checkbox>} label="Publish" value={product.publish} onChange={(e) => setProduct(e.target.value)}/>
                </FormControl>
                <Button color="secondary">Submit</Button>
            </FormGroup>
        </div>
    )
}

export default Add