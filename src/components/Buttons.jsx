import React from 'react'
import Button from 'react-bootstrap/Button'
import './buttons.css'
import { useSelector, useDispatch } from 'react-redux';

function Buttons() {

    const url = `http://universities.hipolabs.com/search?country=Australia`
    const dispatch = useDispatch()
    const results = useSelector(state => state.results)

    const handleLoad = async () => {
        try {
            const res = await (await fetch(url)).json()
            dispatch({ type: 'clickBtn/load', payload: res })
        } catch (err) {
            console.log('Error at loading:', err);
        }
    }

    const handleDelete = () => {
        if (results.length < 1) return
        dispatch({ type: 'clickBtn/delete' })
    }

    const handleAdd = () => {
        dispatch({ type: 'clickBtn/add' })
    }


    return (
        <div className='btns'>
            <Button variant="primary" onClick={handleLoad}>Load</Button>
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
            <Button variant="success" onClick={handleAdd}>Add</Button>
        </div>
    )
}

export default Buttons