import styles from './CSS/home.module.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom';
import Menu from '../components/menu';

function Home({navigation}) {


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
        </div>


      </div>
    );
  }
  
  export default Home;