import styles from './CSS/image_segmetion.module.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom';
import Menu from '../components/menu';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'

import { Grid } from '@mui/material';
import ReactPlayer from 'react-player/lazy'


function VideoSegmentation({navigation}) {


    const slideImages = [
        {
          url: 'seg_04.jpeg',
          caption: 'Slide 1'
        },
        {
          url: 'segment_03.jpg',
          caption: 'Slide 2'
        },
      ];

    return (
      <div className={styles.Home}>

        <div className={styles.slide_container}>
            <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div className={styles.each_slide} key={index}>
                        <div className={styles.image} style={{'backgroundImage': `url(${slideImage.url})`}}>
                            <span>{slideImage.caption}</span>
                        </div>
                    </div>
                ))} 
            </Slide>
        </div>

        <div className={styles.option}>

            <Menu/>
            <br>
            </br>
            <input type="file"/>
            <button>Submit</button>
            <br>
            </br>
            <br>
            </br>
        </div>


        <div>
            <Grid item xs={8}>
                    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />

            </Grid>
            <br/>
            <Grid item xs={8}>
                    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />

            </Grid>
        </div>


      </div>
    );
  }
  
  export default VideoSegmentation;