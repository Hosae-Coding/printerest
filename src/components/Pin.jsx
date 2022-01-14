import { SearchRounded } from '@mui/icons-material';
import React from 'react';
import Data from '../dummy/Data';

const Pin = ({ pinSize, imgSrc, name, link }) => {
   return (
      <div className={`pin ${pinSize}`}>
         <a href={link}>
            <img src={imgSrc} alt="image" width="100%" height="100%" />
         </a>
         <div className="content">
            <h3>{name}</h3>

            <SearchRounded color="" className="search" />
         </div>
      </div>
   );
};

export default Pin;
