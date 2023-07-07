import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardContext } from '@/contexts/CardContext';

interface propsInst {
 img: string;
 title: string;
 price: number;
}

function InstCard({img, title, price}: propsInst) {
  const { handleAddItemToCard } = useContext(CardContext)

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" 
        onClick={() => handleAddItemToCard({img, title, price})}>
        Share
        </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default InstCard