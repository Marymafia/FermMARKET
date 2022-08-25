import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { addBestThunk } from '../../redux/actions/bestAction';

export default function MultipleInteractionCard({
  el, photo, name, title, price,
}) {
  const dispatch = useDispatch();

  const addBest = () => {
    console.log('best favorites', el);
    dispatch(addBestThunk(el));
  };
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 330,
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
        <IconButton
          onClick={addBest}
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
            backgroundColor: 'green',
          }}
        >
          <Favorite onClick={addBest} />
        </IconButton>
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
    </Card>
  );
}
