/* eslint-disable no-dupe-keys */
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  {
    img: 'https://blagosloven.su/upload/medialibrary/35c/img_9465.jpg',
    title: 'Breakfast',
  },
  {
    img: 'https://blagosloven.su/upload/medialibrary/dca/img_9632.jpg',
    title: 'Burger',
  },
  {
    img: 'https://blagosloven.su/upload/medialibrary/7da/dsc09686.jpg',
    title: 'Camera',
  },
  {
    img: 'https://blagosloven.su/upload/medialibrary/e47/img_9439_1_1.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://blagosloven.su/upload/medialibrary/815/img_9771.jpg',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://blagosloven.su/upload/medialibrary/03a/img_9811.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://blagosloven.su/upload/medialibrary/e0d/img_9782.jpg',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://blagosloven.su/upload/medialibrary/299/img_0132.jpg',
    title: 'Sea star',
  },
  {
    img: 'https://blagosloven.su/upload/medialibrary/ef3/eshche_kozochki.jpg',
    title: 'Bike',
  },
];

export default function AboutImageList() {
  return (
    <ImageList
      sx={{
        width: 1000,
        height: 950,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      cols={3}
      rowHeight={300}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
