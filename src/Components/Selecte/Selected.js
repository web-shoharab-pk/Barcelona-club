/* eslint-disable no-undef */
import React from 'react';
import './Selected.css'


const Selected = (props) => {
    
    const selectedPlayer = props.selectedPlayer;
    const totalSelectedPlayerName = selectedPlayer.reduce((sum, person) => sum = sum + "Name: " + person.name + ", Salaray: " + person.salary + " | " , '')
    const totalSelectedPlayerSalary = selectedPlayer.reduce((sum, person) => sum = sum +  person.salary, 0)

    return (
        <div className="selected-player">
            <h3>Total Selected Player: {selectedPlayer.length}</h3>
            <h4>Selected Player(name, salary): </h4><h5>{totalSelectedPlayerName}
            </h5>
            <h4>Total Budget: </h4><h5> ${totalSelectedPlayerSalary}</h5>
        </div>
    );
};

export default Selected;