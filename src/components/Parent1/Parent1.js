import React from 'react';

// state
import { useStateValue } from '../../state/StateProvider';

const Parent1 = ({ setUser }) => {
    const [{ user }, dispatch] = useStateValue();
    
    const addUser = () => {
        // setUser('arif')
        dispatch({
            type: 'SET_USER',
            user: 'arif'
        })
    }
        
    const removeUser = () => {
        // setUser(null)
        dispatch({
            type: 'SET_USER',
            user: null
        })
    }

    const setUserNull = () => {
        dispatch({
            type: 'REMOVE_USER'
        })
    }

    return (
        <section>
            <h1>Parent1</h1>
            <button onClick={addUser}>Set user arif</button>
            <button onClick={removeUser}>remove user</button>
            <button onClick={setUserNull}>set User Null</button>
        </section>
    )
}

export default Parent1;
