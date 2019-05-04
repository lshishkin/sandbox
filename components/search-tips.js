import React from "react"

const SearchTips = props => {
  const { tips } = props
  const arr = tips.map(val => <li>{val.replace(/['"]+/g, "")}</li>)
  return <ul className="search-tips">{arr}</ul>
}

export default SearchTips
