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
    <Card
      onClick={hadleOnClick}
      className="col-lg-4"
      sx={{
        maxWidth: 265,
        margin: '1rem',
        transition: 'all .4s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardMedia
        hover
        component="img"
        height="140"
        image={img}
        alt=""
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: 'green',
          }}
        >
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={hadleOnClick} size="small">перейти</Button>
      </CardActions>
    </Card>
  );
}
