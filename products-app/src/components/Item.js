import { CardActions, Button } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'
import { IconButton } from '@mui/material';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';


const Item = ({ item, handleClick, handleDelete }) => {

    return (
        <div className="App-cardnote" onClick={() => handleClick(item.id)}>
            <Card elevation={1} sx={{ width: 240, height: 500}} className="Product-card" >
                <CardMedia className="Card-img" component="img" image={item.image} alt={item.title} />
                <CardContent className="Card-content" >
                    <Typography variant="h6" component="div" className="Card-title">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="Card-price">
                        {item.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className="Card-button" size="medium" color="primary">
                        Update
                    </Button>
                    <IconButton onClick={() => handleDelete(item.id)}>
                        <DeleteOutlined />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Item;