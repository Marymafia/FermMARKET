import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function MediaCard({ img, id, name }) {
  const navigate = useNavigate();
  const hadleOnClick = () => {
    navigate(`/${id}`);
  };
  return (
    <Card sx={{ maxWidth: 370 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={hadleOnClick} size="small">перейти</Button>
      </CardActions>
    </Card>
  );
}
