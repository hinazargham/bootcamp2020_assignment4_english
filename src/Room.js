import React, {useState} from 'react';
import './Room.css';

function Room() {

    let [isLit, setLit] = useState(false);
    let [isTemp, setTemp] = useState(22);

    return (
        
    <div className={`room ${isLit ? 'ON' : 'OFF'}`}>
    <h2>Welcome to BOOTCAMP's Room!!</h2>
    <h2>Kindly click the buttons below to switch ON or OFF the lights!!! </h2>

    <button onClick= {() => {
        console.log("Button Clicked");
        setLit(false);
    } }> OFF </button>

    <button onClick= { () => {
        console.log("Button Clicked");
        setLit(true);
    } } > ON </button>

    <br/>

    <b>The lights are now switched {isLit ? 'ON. Great!! ' : 'OFF. ohhh !!'}</b>
    <br/>
    
    <h2>Current Room Temperature is 22 Degrees Celsius..... </h2>
    <h2>Click the buttons below to change the temperature!!!</h2>

    <button onClick= { () => {
        console.log("Button clicked");
        setTemp(++isTemp);
    } } > + </button>

    <button onClick ={ () => {
        console.log("Button Clicked");
        setTemp(--isTemp)
    }}> - </button>

    <h3><b>Now, the temperature is {isTemp} Degrees Celsius. </b></h3>


    <p><i>
    BOOTCAMP2020 ASSIGNMENT 4
    <br/>
    <br/>
    Topic: Using State in React Components
    <br/>
    <br/>
    Submitted by Hina Zargham
    </i></p>
    </div>

    );
    
}

export default Room;