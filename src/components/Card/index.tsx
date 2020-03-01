import React from 'react';
import './card.css';
import { Movie } from '../../modules/interfaces';
import { MOVIE_IMAGE } from '../../modules/constant';

const Card = ({ movie }: { movie: Movie }) => {
    let { image, releaseYear, title } = movie || {};
    if (!image || !title) {
        return null;
    }
    if (title.length > 20) {
        title = title.substring(0, 21) + '...';
    }
    return (
        <div style={{ textAlign: 'center', padding: '9px' }}>
            <div className="card">
                <img src={`${MOVIE_IMAGE}${image}`} height={350} width='auto' alt='movie' loading='lazy'/>
            </div>
            <div>
                <p>{title}</p>
                <p className='year'>{releaseYear}</p>
            </div>
        </div>
    );
}

export default Card;
