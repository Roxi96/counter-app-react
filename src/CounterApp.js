import React ,{useState}from 'react';
import PropTypes from 'prop-types';


//functional component
const CounterApp = ({value=0}) =>{

    //el state para sumar
    const [counter,setCounter] = useState(value);// use state  retorna un arreglo []

    //handleAdd
    const handleAdd = () => {
        // setCounter(counter+1)
        setCounter((c)=> c+1);
    }
   //handleSubstract
    const handleSubstract = ()=> {
        setCounter(counter-1);
    }
    //handleReset
    const handleReset = () => {
        setCounter(value);
    }



    return (
        <>
        <div className="container">
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubstract}>-1</button>
        </div>
        
        </>
    );
}
CounterApp.propTypes= {
    value: PropTypes.number,
}

export default CounterApp;