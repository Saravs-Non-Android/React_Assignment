/**
 * Created by Mohan Rathour on 18/06/17.
 */
import React from "react";
import ItemInfo from "./ItemInfo";
import Search from "./Search";
/**
 * Render the Restaurant list data
 * @param props
 * @returns {XML}
 * @constructor
 */
export const ItemsList = (props) => {
  return (
    <div className="row">
      <div className="content col-sm-12 col-md-12">
        <Search />
        <div className="box">
          <h1>
            <a className="action" href="#" onClick={props.handleSubmit}>PROCEED TO CHECKOUT</a>
          </h1>
          <div className="row">
            {
              props.items.length > 0 && <form role="form" className="form" name="restaurantForm" id="restaurantForm">
              {
                props.items.map(function(s, index) {
                s.category = s.category.toString();
                return (<ItemInfo info={s} key={index} handleSubmit={props.handleSubmit} addToCart={props.addToCart} refs="items"/>)
                })
              }
              </form> || <p className="text-center">No data found.</p>
            }
          </div>

        </div>
      </div>
    </div>
  );
}
