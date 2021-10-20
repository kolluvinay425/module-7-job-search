import React from "react";
import { connect } from "react-redux";
import { removeFavourite } from "../redux/actions";
// const mapStateToProps = (job) => job;
// const mapDispatchToProps = (dispatch) => ({
//   removeFromFav: (f) => {
//     dispatch(removeFavourite(f));
//   },
// });
function Favorite(favorite) {
  console.log("jobbbb------------>", favorite);
  return (
    <div>
      {favorite.favorite.map((fav) => (
        <h1 style={{ color: "white" }}>{fav.company_name}</h1>
      ))}
    </div>
  );
}
export default connect((s) => s)(Favorite);
