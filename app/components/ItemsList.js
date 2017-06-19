// const React = require("react");
// const _ = require("lodash");
// const ItemInfo = require("./ItemInfo.jsx");
// const AddSearch = require("./AddSearch.jsx");

// //Add to cart
// let actions = require("../actions/ItemActions");

// module.exports = React.createClass({
//   handleSubmit: function (event) {
//     event.preventDefault();
//     let checkedValue = [];
//     let inputElements = document.getElementsByClassName('messageCheckbox');
//     for (let i = 0; inputElements[i]; ++i) {
//       if (inputElements[i].checked) {

//         let checkval = inputElements[i].value;
//         checkedValue.push(checkval);
//       }
//     }
//     if (!_.isEmpty(checkedValue))
//       actions.addToCart(checkedValue);
//     else
//       alert('Please select at least one item');
//   },
//   render: function () {
//     return (
//         <div className="row">
//           <div className="content col-sm-12 col-md-12">
//             <AddSearch />

//             <div className="box">
//               <h1>
//                 <a className="action" href="#" onClick={this.handleSubmit}>PROCEED TO CHECKOUT</a>
//               </h1>
//               <div className="row">
//                 { this.props.items.length > 0 &&
//                 <form role="form" className="form" name="restaurantForm" id="restaurantForm">
//                   {
//                     this.props.items.map(function (s, index) {
//                       s.category = s.category.toString();
//                       return (
//                           <ItemInfo info={s} key={"item" + index}/>
//                       )
//                     })
//                   }
//                 </form> || <p className="text-center">No data found.</p>
//                 }
//               </div>

//             </div>
//           </div>
//         </div>
//     )
//   }
//  <AddSearch />});
 
import React from "react";
//import AddSearch from "../actions/ItemActions";
export const ItemsList  = (props) => {
        return (
        <div className="row">
          <div className="content col-sm-12 col-md-12">
            <div className="box">
              <h1>
                {props.items} Mohan<a className="action" href="#" onClick={props.handleAction}>PROCEED TO CHECKOUT</a>
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
}