import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom';

function Menu(){
    return (


            <Stack direction="row" spacing={2}>
                <Link to='/'>
                    <Button variant="contained">Menu</Button>
                </Link>

                <Link to='/image-segmentation'>
                    <Button variant="contained">Image Segmentation</Button>
                </Link>

                <Link to='/video-segmentation'>

                    <Button variant="contained" href="#contained-buttons">
                        Video Segmentation
                    </Button>
                </Link>
            </Stack>



    )
}

export default Menu;