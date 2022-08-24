import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';

export default function MultipleInteractionCard({ photo, name, title }) {
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
        <IconButton
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
          <Favorite />
        </IconButton>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 2, color: 'Black' }}>
        <h3 href="#multiple-actions" overlay underline="none">
          {name}
        </h3>
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2, color: 'green' }}>
        <p>{title}</p>
      </Typography>
    </Card>
  );
}