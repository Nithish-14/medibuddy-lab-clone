import React from 'react'

const CategoryCard = ({category}) => {

  return (
    <li className="category-list-element">
      <button className={`category-button ${category==="Popular" ? "active-button" : ""}`}>{category}</button>
    </li>
  )
}

export default CategoryCard