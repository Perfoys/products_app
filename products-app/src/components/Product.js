import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { connect } from "react-redux";
import { getProductById } from "../actions/product";
import store from '../store';

const Product = ({ product }) => {

    const isEmpty = (obj) => {
        for (let key in obj) {
            return false
        }
        return true
    }
    
    if (isEmpty(product)) {
        const id = (window.location.href).split('/')[4]
        store.dispatch(getProductById(id))
    }

    return  (
        <div className="Product">
             <Box sx={{ width: '100%', maxWidth: 500 }}>
                <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                />
                <Typography variant="h1" component="div" gutterBottom>
                    {product.title}
                </Typography>
                <Typography variant="h2" gutterBottom component="div">
                    {product.description}
                </Typography>
                <Typography variant="h3" gutterBottom component="div">
                    {product.category}
                </Typography>
                <Typography variant="h4" gutterBottom component="div">
                    {product.price}
                </Typography>
                <Typography variant="h5" gutterBottom component="div">
                    {product.price}    
                </Typography>
            </Box>
        </div>
    )
}

const mapStateToProps = (state) => ({
    product: state.product.product,
})

export default connect( mapStateToProps, { getProductById })(Product)