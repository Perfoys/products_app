import { CardActions, Button } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'
import { IconButton } from '@mui/material';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';


const Item = ({ item, handleClick, handleDelete, handleUpdate }) => {

    return (
        <div className="App-cardnote" >
            <Card elevation={1} sx={{ width: 240, height: 500}} className="Product-card" >
                <CardMedia className="Card-img" component="img" image={item.image} alt={item.title} onClick={() => item.hasOwnProperty('publish') ? console.log("click") : handleClick(item.id)}/>
                <CardContent className="Card-content" onClick={() => item.hasOwnProperty('publish') ? console.log("click") : handleClick(item.id)}>
                    <Typography variant="h6" component="div" className="Card-title">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="Card-price">
                        {item.price}$
                    </Typography>
                </CardContent>
                {
                    item.hasOwnProperty('publish') ?
                        <CardActions>
                            <Button className="Card-button" size="medium" color="primary" onClick={() => handleUpdate(item.id)}>
                                Update
                            </Button>
                            <IconButton onClick={() => handleDelete(item.id)}>
                                <DeleteOutlined />
                            </IconButton>
                        </CardActions>
                        :
                        <div></div>
                } 
            </Card>
        </div>
    )
}

export default Item;