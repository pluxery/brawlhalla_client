import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import {yellow} from "@mui/material/colors";

const RatingStarsCard = ({rating}) => {
    return (
        <div>
            {[1, 2, 3, 4, 5].map((item, index) => (
                item > Math.round(rating) ?
                    <StarBorderIcon sx={{color: yellow[700], fontSize: 35}}/>
                    :
                    <StarIcon sx={{color: yellow[700], fontSize: 35}}/>
            ))}

        </div>
    );
};

export default RatingStarsCard;