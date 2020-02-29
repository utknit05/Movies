import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchField, toggleSearch, changeCategory, findMovies } from '../../modules/action';
import { State } from '../../modules/interfaces';
import './search.css';

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="23" viewBox="0 0 172 172"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#666666"><path d="M72.24,10.32c-32.26344,0 -58.48,26.21656 -58.48,58.48c0,32.26344 26.21656,58.48 58.48,58.48c12.76563,0 24.56375,-4.11187 34.185,-11.0725l45.2575,45.15l9.675,-9.675l-44.72,-44.8275c8.78813,-10.23937 14.0825,-23.52906 14.0825,-38.055c0,-32.26344 -26.21656,-58.48 -58.48,-58.48zM72.24,17.2c28.54125,0 51.6,23.05875 51.6,51.6c0,28.54125 -23.05875,51.6 -51.6,51.6c-28.54125,0 -51.6,-23.05875 -51.6,-51.6c0,-28.54125 23.05875,-51.6 51.6,-51.6z"></path></g></g></svg>;

const Search = () => {
    const searchActive = useSelector((state: State) => state.searchActive);
    const dispatch: Dispatch = useDispatch();
    const onSearchClick = () => {
        dispatch(toggleSearch(true));
        dispatch(changeCategory(''));
    }

    const onSearch = (val: string) => {
        dispatch(changeSearchField(val));
        val && findMovies(val, dispatch);
    }

    return (
        <div className="searchWrapper">
            {
                searchActive
                ? <>
                    <input
                        type='text'
                        placeholder='Movies/ TV Shows'
                        autoFocus
                        onChange={(e) => onSearch(e.target.value)}
                    />
                    <div className="iconWrapper">
                        {searchIcon}
                    </div>
                </>
                : <>
                    {searchIcon}
                    <div onClick={onSearchClick} style={{paddingLeft: '5px', cursor: 'pointer'}}>SEARCH</div>
                </>
            }
        </div>
    );
}

export default Search;
