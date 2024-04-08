import React, { useState } from 'react';
import './Box.css';

const Box = () => {
    const [creditCardNumber, setCreditCardNumber] = useState('');

    const validateCardNumber = number => {
        const regex = new RegExp("^[0-9]{13,19}$");
        if (!regex.test(number)){
            return false;
        }
      
        return luhnCheck(number);
    }
    
    const luhnCheck = val => {
        let checksum = 0;
        let j = 1; 
        for (let i = val.length - 1; i >= 0; i--) {
          let calc = 0;
          calc = Number(val.charAt(i)) * j;
          if (calc > 9) {
            checksum = checksum + 1;
            calc = calc - 10;
          }
          checksum = checksum + calc;
          if (j === 1) {
            j = 2;
          } else {
            j = 1;
          }
        }
        return checksum % 10 === 0;
    }

    const handleInputChange = (event) => {
      setCreditCardNumber(event.target.value);
    };

    const handleSubmit = () => {
        console.log("Credit Card Number:", creditCardNumber);
        if (validateCardNumber(creditCardNumber)) {
            alert('Credit Card Number is valid');
        } else {
            alert('Credit Card Number is invalid');
        }
        setCreditCardNumber('');
    };
  
    return (
        <div className='box'>
            <h2>Enter Credit Card Number</h2>
            <br />
            <input type="number" className="no-spinner" value={creditCardNumber} onChange={handleInputChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Box;
