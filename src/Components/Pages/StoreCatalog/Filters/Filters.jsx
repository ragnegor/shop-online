import React from "react";
import style from "./Filters.module.css";
import FilterComponent from "./FilterComponent/FilterComponent";

function Filters(props) {
  console.log(props)
  return (
    <div className={style.filters}>
      {
        props.filters.map(f =>
          <FilterComponent
                          key={f.header}
                          filter={f.checkBoxes}
                          header={f.header}
          />
        )
      }
    </div>
  )
}

export default Filters;