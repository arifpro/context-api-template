import React from 'react';

// state
import { useStateValue } from '../../../../state/StateProvider';

const Sub1Child1P1 = ({ setUser }) => {
    const [{ user, age }, dispatch] = useStateValue();
    
    // ADD user
    const addUser = () => {
        dispatch({
            type: 'SET_USER',
            user: 'Md Arif Hossain'
        })
    };

    // REMOVE user
    const removeUser = () => {
        dispatch({
            type: 'REMOVE_USER'
        })
    };

    // UPDATE user
    const onChangeUserInput = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SET_USER',
            user: e.target.value
        })
    };

    // ADD age
    const addAge = () => {
        dispatch({
            type: 'SET_AGE',
            age: '21'
        })
    };

    // REMOVE age
    const removeAge = () => {
        dispatch({
            type: 'REMOVE_AGE'
        })
    };

    // UPDATE age
    const onChangeAgeInput = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SET_AGE',
            age: e.target.value
        })
    };

    return (
        <section>
            <h1>Sub1 Child1 Of Parent1</h1>
            <button onClick={addUser}>Set user Arif</button>
            <button onClick={removeUser}>Remove user</button>

            <br /><br />
            <button onClick={addAge}>Set age 21</button>
            <button onClick={removeAge}>Remove age</button>

            <br /><br />
            <label htmlFor="user">Update user</label>
            <input name="user" onChange={e => onChangeUserInput(e)} value={user ? user : ''} />

            <br /><br />
            <label htmlFor="age">Update age</label>
            <input name="age" onChange={e => onChangeAgeInput(e)} value={age ? age : ''} />
        </section>
    )
}

export default Sub1Child1P1;
