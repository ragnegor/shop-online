import React, { useContext } from "react";
import style from "./StarsList.module.css";

import Star from "./Star";

import { StarRatingContext } from "../StarRating";

function StarsList() {
  const { maxValue } = useContext(StarRatingContext);

  return (
    <div className={style.starRating}>
      {[...Array(maxValue)].map((star, index) => {
        const value = index + 1;

        return (
          <Star
            key={index}
            value={value}
          />
        );
      })}
    </div>
  );
}

export default StarsList;
