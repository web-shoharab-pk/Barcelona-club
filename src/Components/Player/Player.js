import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCheckCircle} />
 
 
const Player = (props) => {
     const {name, image, position, age, salary} = props.players;
    return (
        <div>
            <div className="playersInfo">
            <h3>Name: {name}</h3>
            <img src={image} alt=""/>
            <h5>Field Position: {position}</h5>
            <h4>Age: {age}, Salary: ${salary}</h4>
            <button onClick={() => props.handleSelectedPlayer(props.players)} className="btn btn-danger">{element} <b>Select Player</b></button>
            </div>
            
        </div>
    );
};

export default Player;