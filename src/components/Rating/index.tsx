import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../modules/interfaces';
import filledStar from '../../assets/filled.png';
import emptyStar from '../../assets/empty.png';
import { Dispatch } from 'redux';
import { updateRating } from '../../modules/action';

const Rating = ()  => {
    const { rating } = useSelector((state: State) => state);
    const dispatch: Dispatch = useDispatch();
    let rate: any[] = [];
    Array.from(Array(rating)).forEach((x, i) => {
        rate.push(<img
            src={filledStar}
            height={20}
            width={20}
            style={{padding: '3px', cursor: 'pointer'}}
            alt='star'
            onClick={() => dispatch(updateRating(i+1))}
        />);
    });
    Array.from(Array(5-rating)).forEach((x, i) => {
        rate.push(<img
            src={emptyStar}
            height={18}
            width={18}
            style={{padding: '3px', cursor: 'pointer'}}
            alt='star'
            onClick={() => dispatch(updateRating(i+rating+1))}
        />); 
    });

    return (
        <>
          {rate}
        </>
    )
}

export default Rating;
