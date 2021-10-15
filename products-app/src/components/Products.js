import { useEffect, useState } from "react";
import { connect } from "react-redux"
import { getProducts } from "../actions/products"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import store from "../store";


const Products = ({ products }) => {
    const [amount, setAmount] = useState(8)

    if (!products.length) {
        store.dispatch(getProducts())
    }

    useEffect(() => {
        
    }, [products])


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
                                    <Card sx={{ width: 240, height: 500}} className="Product-card">
                                        <CardActionArea>
                                            <CardMedia className="Card-img" component="img" image={item.image} alt={item.title} />
                                            <CardContent className="Card-content">
                                                <Typography variant="h6" component="div" className="Card-title">
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" className="Card-price">
                                                    {item.price}$
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button className="Card-button" size="medium" color="primary">
                                                Buy
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        }
                    })
                }
            </Grid>
        </div>
    )
}

const mapStateToProps = (state) => ({
    products: state.products.products,
})

export default connect( mapStateToProps, { getProducts })(Products)