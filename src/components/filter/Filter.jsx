import React from 'react';
// import PropTypes from 'prop-types';
import s from './Filter.module.css'

function Filter({value, changeFilter}) {
    return (
         <label>
        Find contacts by name
            <input className={s.seacrhInput} type='text' placeholder='Enter a name' value={value} onChange={changeFilter}/>
    </label>
    )
   
}



export default Filter;