import React from "react";
import style from "./Filters.module.css";
import FilterComponent from "./FilterComponent/FilterComponent";

function Filters(props) {
  console.log(props)
  return (
    <div className={style.filters}>
      <FilterComponent filter={props.filters}
                       header={props.filters.header}
      />
    </div>
  )
}

export default Filters;