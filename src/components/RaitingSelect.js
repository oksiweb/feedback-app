import React from "react"

function RaitingSelect({ select, selected }) {
  const handleChange = e => {
    select(+e.target.value)
  }

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => i + 1).map(item => {
        return (
          <li key={item}>
            <input type="radio" id={item} name="raiting" onChange={handleChange} value={item} checked={selected === item} />
            <label htmlFor={item}>{item}</label>
          </li>
        )
      })}
    </ul>
  )
}

export default RaitingSelect
