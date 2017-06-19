import React from "react";
import {Link} from "react-router";

export const Header = (props) => {
        return (
        <div className="row">
          <div className="content col-sm-12 col-md-12">
            <div className="box">
              <h1>
                <a className="action" href="#" onClick={props.handleAction}>PROCEED TO CHECKOUT</a>
              </h1>
              <div className="row">
                { props.items.length > 0 &&
                <form role="form" className="form" name="restaurantForm" id="restaurantForm">
                  {
                      props.items.map(function (s, index) {
                      s.category = s.category.toString();
                      return (
                          <ItemInfo info={s} key={"item" + index}/>
                      )
                    })
                  }
                </form> || <p className="text-center">No data found.</p>
                }
              </div>

            </div>
          </div>
        </div>
    );
};