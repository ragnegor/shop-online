import React from "react";
import CheckBoxLabel from "../CheckBoxLabel/CheckBoxLabel";

function FilterComponent (props) {
  return(
    <div>
      <h3>{props.header}</h3>
      {
        props.filter.map(type =>
          <div key={type.id}>
            <CheckBoxLabel checkbox={type.inputType}
                           id={type.id}
                           item={type.item}
                           htmlFor={type.htmlFor}

            />
          </div>
        )
      }
    </div>
  )
}

export default FilterComponent;