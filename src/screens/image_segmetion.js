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
import { useState } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';

function ImageSegmentation({ navigation }) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


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
    const routeUpload = 'http://localhost:9091/api/uploadFile/'

    const [url, setUrl] = useState('')

    const submitFile = () => {
        var formFile = new FormData();
        var imagefile = document.getElementById('formFile');
        formFile.append("formFile", imagefile.files[0]);
        axios.post(routeUpload, formFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                setUrl(res.data.data)
            })
    }

    return (
        <div className={styles.Home}>

            <div className={styles.slide_container}>
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div className={styles.each_slide} key={index}>
                            <div className={styles.image} style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                                <span>{slideImage.caption}</span>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>

            <div className={styles.option}>

                <Menu />
                <br>
                </br>
                <input id={'formFile'} type="file" />
                <button onClick={()=>submitFile()}>Submit</button>
                <br>
                </br>
                <br>
                </br>
            </div>


            <div>
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={8}>
                        <Card sx={{ maxWidth: 600 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Original Image
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={8}>
                        <Card sx={{ maxWidth: 600 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={url}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Image Segmented
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>


        </div>
    );
}

export default ImageSegmentation;