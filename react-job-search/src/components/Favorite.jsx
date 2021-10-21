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
      {/* <h1 style={{ color: "white" }}>
        {favorite.favorite.favorite.company_name}
      </h1> */}
    </div>
  );
}
export default connect((s) => s)(Favorite);
