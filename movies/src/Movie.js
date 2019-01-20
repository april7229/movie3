import React from 'react';
import { link } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';


const Poster_Path = 'http://image.tmdb.org/t/p/w154'
const Movie = ( { movie }) => (
    <link to={`${ movie.id }`}>
        <Overdrive id={movie.id}>
            <Poster src={`${ Poster_Path }${ movie.poster_path }`} alt = {movie.title}/>
        </Overdrive>
        
    </link>
)

export default Movie;

export const Poster = styled.img`
box-shadow: 0 0 35px black;`;
