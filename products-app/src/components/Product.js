import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { connect } from "react-redux";
import { getProductById } from "../actions/product";

const Product = ({ product }) => {


    return  (
        <div className="App-Product">
             <Box sx={{ width: '100%', maxWidth: 500 }}>
                <img
                    width="300px"
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                />
                <Typography variant="h3" component="div" gutterBottom>
                    {product.title}
                </Typography>
                <Typography variant="h5" gutterBottom component="div">
                    {product.description}
                </Typography>
                <Typography variant="h5" gutterBottom component="div">
                    {product.category}
                </Typography>
                <Typography variant="h5" gutterBottom component="div">
                    {product.price}
                </Typography>
            </Box>
        </div>
    )
}

const mapStateToProps = (state) => ({
    product: state.app.product.product,
})

export default connect( mapStateToProps, { getProductById })(Product)