import React, { useState } from 'react'

export default function SumOfTwoNumbers() {
    const [numberOne, setNumberOne] = useState();
    const [numberTwo, setNumberTwo] = useState();
    const [answer, setAnswer] = useState(0);
    const getSum = () => {
        setAnswer(Number(numberOne) + Number(numberTwo));
    }
    return (
        <div>
            <h3>Sum Of Two Numbers</h3>
            <div>
                <input type='number' onChange={e => setNumberOne(e.target.value)} placeholder='Enter First Number' /><br /><br />
                <input type='number' onChange={e => setNumberTwo(e.target.value)} placeholder='Enter second Number' /><br /><br />
                <input type='submit' onClick={getSum} />

            </div>
            <h4>Sum of this two numbers is : {answer}</h4>
        </div>
    )
}
