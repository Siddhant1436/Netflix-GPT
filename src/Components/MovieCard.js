import React from 'react'
import { POSTER_CDN_URL } from '../utils/Constants';

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
        <div className='w-48 pr-3'>
            <img className="rounded-lg" alt="poster" src={POSTER_CDN_URL + posterPath} />
        </div>
    )
}

export default MovieCard;