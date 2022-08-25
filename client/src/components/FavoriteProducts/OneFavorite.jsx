import Button from '@mui/material/Button';
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';

import DeleteIcon from '@mui/material/Chip';
import { addBestThunk, removeBestThunk } from '../../redux/actions/bestAction';

export default function MultipleInteractionCard({
  name, title, photo, price, id,
}) {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeBestThunk(id));
  };
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 320,
        margin: '1rem',
        transition: 'all .4s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={photo}
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 2, color: 'Black' }}>
        <h3 href="#multiple-actions" overlay underline="none">
          {name}
        </h3>
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2, color: 'green' }}>
        <p>{title}</p>

        <h4>
          {price}
          {' '}
          руб/кг
        </h4>
      </Typography>
      <Button onClick={removeHandler} variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </Card>
  );
}
