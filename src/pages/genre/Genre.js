import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import history from './history.jpg'
import fantasy from './fantasy.webp'
import adventure from'./adventure.webp'
import horror from './horror.jpg'
import scifi from './scifi.webp'
import poetry from './poetry.jpg'
import biography from './biography.jpg'
import mystery from './mystery.jpg'
import novel from './novel.jpg'
import fiction from './fiction.jpg'
import suspense from './suspense.jpg'
import travel from './travel.jpg'
import crime from './crime.jpg'
import romance from './romance.webp'
import anime from './anime.jpg'
import { Link } from 'react-router-dom';
import "./Genre.css"
const images = [
  {
    url: history,
    title: <Link style={{textDecoration:'none',color:'white'}}to='/history'>History</Link> ,
    width: '20%',
  },
  {
    url: adventure,
    title: <Link style={{textDecoration:'none',color:'white'}}to='/adventure'>Adventure</Link>,
    width: '20%',
  },
  {
    url: fantasy,
    title: <Link style={{textDecoration:'none',color:'white'}}to='/fantasy'>Fantasy</Link>,
    width: '20%',
  },
  {
    url: biography,
    title: <Link style={{textDecoration:'none',color:'white'}}to='/biography'>Biography</Link>,
    width: '20%',
    
  },
  {
    url: horror,
    title: <Link style={{textDecoration:'none',color:'white'}}to='/horror'>Horror</Link>,
    width: '20%',
  },
  {
    url: mystery,
    title: <Link style={{textDecoration:'none',color:'white'}}to='/mystery'>Mystery</Link>,
    width: '20%',
  },
  {
    url: scifi,
    title: <Link style={{textDecoration:'none',color:'white'}}to='/scifi'>Sci-Fi</Link>,
    width: '20%',
  },
  {
    url: poetry,
    title: <Link style={{textDecoration:'none',color:'white'}}to='/poetry'>Poetry</Link>,
    width: '20%',
  },
  {
    url: novel,
    title: <Link style={{textDecoration:'none',color:'white'}}to='/novel'>Novel</Link>,
    width: '20%',
  },
  {
    url: fiction,
    title: <Link style={{textDecoration:'none',color:'white'}}to='/fiction'>Fiction</Link>,
    width: '20%',
  },
  {
    url: suspense,
    title: <Link style={{textDecoration:'none',color:'white'}}to='/suspense'>Suspense</Link>,
    width: '20%',
  },
  {
    url: romance,
    title: <Link style={{textDecoration:'none',color:'white'}}to='/romance'>Romance</Link>,
    width: '20%',
  },
  {
    url: travel,
    title: <Link style={{textDecoration:'none',color:'white'}}to='/travel'>Travel</Link>,
    width: '20%',
  },
  {
    url: anime,
    title: <Link style={{textDecoration:'none',color:'white'}}to='/anime'>Anime</Link>,
    width: '20%',
  },
  {
    url: crime,
    title: <Link style={{textDecoration:'none',color:'white'}}to='/crime'>Crime</Link>,
    width: '20%',
  },
  

];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 253,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}