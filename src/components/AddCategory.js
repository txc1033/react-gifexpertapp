import { useState } from 'react'
import propTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

  const [inputV, setInputV] = useState('');

    const handleInput = (e) => {
        setInputV(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputV.trim().length > 2) {
            setCategories(cats => [inputV, ...cats]);
            setInputV('');
        }
            
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <input className="category-filter"
            type="text"
            value={inputV}
            placeholder="Escribe una categoría"
            onChange={handleInput}
        />
    </form>
  )

}

AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}

