import React from "react";
import style from "./Philters.module.css";

function Philters() {
  return (
    <div className={style.philters}>
      <div className={style.type}>
        <h3>Type:</h3>
        <div>
          <input type="checkbox" id="check" name="check"/>
          <label htmlFor="check">Checkbox</label>
        </div>
        <div>
          <input type="checkbox" id="check1" name="check1"/>
          <label htmlFor="check1">Checkbox 2</label>
        </div>
        <div>
          <input type="checkbox" id="check2" name="check2"/>
          <label htmlFor="check2">Checkbox 3</label>
        </div>
        <div>
          <input type="checkbox" id="check3" name="check3"/>
          <label htmlFor="check3">Checkbox 3</label>
        </div>
      </div>
      <div className={style.brand}>
        <h3>Brand:</h3>
        <div>
          <input type="checkbox" id="check4" name="check"/>
          <label htmlFor="check4">Checkbox</label>
        </div>
        <div>
          <input type="checkbox" id="check5" name="check1"/>
          <label htmlFor="check5">Checkbox 2</label>
        </div>
        <div>
          <input type="checkbox" id="check6" name="check2"/>
          <label htmlFor="check6">Checkbox 3</label>
        </div>
        <div>
          <input type="checkbox" id="check7" name="check3"/>
          <label htmlFor="check7">Checkbox 3</label>
        </div>
        <div>
          <input type="checkbox" id="check8" name="check"/>
          <label htmlFor="check8">Checkbox</label>
        </div>
        <div>
          <input type="checkbox" id="check9" name="check1"/>
          <label htmlFor="check9">Checkbox 2</label>
        </div>
        <div>
          <input type="checkbox" id="check10" name="check2"/>
          <label htmlFor="check10">Checkbox 3</label>
        </div>
        <div>
          <input type="checkbox" id="check11" name="check3"/>
          <label htmlFor="check11">Checkbox 3</label>
        </div>
      </div>
      <div className={style.numberStrings}>
        <h3>Number of<br/> strings:</h3>
        <div>
          <input type="checkbox" id="check12" name="check"/>
          <label htmlFor="check12">Checkbox</label>
        </div>
        <div>
          <input type="checkbox" id="check13" name="check1"/>
          <label htmlFor="check13">Checkbox 2</label>
        </div>
        <div>
          <input type="checkbox" id="check14" name="check2"/>
          <label htmlFor="check14">Checkbox 3</label>
        </div>
        <div>
          <input type="checkbox" id="check15" name="check3"/>
          <label htmlFor="check15">Checkbox 3</label>
        </div>
      </div>
    </div>
  )
}

export default Philters