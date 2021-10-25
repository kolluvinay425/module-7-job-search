import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { removeFavourite } from "../redux/actions";
function Favorite() {
  const data = useSelector((state) => state.favorite.data);
  const dispatch = useDispatch();
  const removeFav = (d) => {
    dispatch(removeFavourite(d));
  };

  console.log("-------------", data.data);
  return (
    <div>
      {data?.data?.map((d) => (
        <h1 onClick={() => removeFav(d)} style={{ color: "white" }}>
          {" "}
          {d.company_name}
        </h1>
      ))}
    </div>
  );
}
export default Favorite;
