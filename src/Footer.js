import React from "react";
import "./Footer.css"
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

function Footer() { 
    return (
        <div className="footer">
            <div className="footer_left">
                <img className="album_image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Usher_Cannes_2016_retusche.jpg/640px-Usher_Cannes_2016_retusche.jpg" />
                <div className="songInfo">
                    <h4>Yeah !</h4>
                    <p>Usher</p>
                </div>
                
            </div>

            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon" />
                <PlayCircleFilledIcon fontSize="large" className="footer_icon" />
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_green"/>
            </div>

            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}


export default Footer;