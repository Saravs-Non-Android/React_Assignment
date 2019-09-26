/**
 * Created by Mohan Rathour on 18/06/17.
 */
import React from "react";
/**
 * Search Item Class
 */
export const ItemInfo = (props) => {
  // TODO-3 Get the info from props and display then display all the information for restaurant like name and image url.
  return (
      <div className="col-sm-6">
        <div className="item-simple">
          <input type="checkbox" name="isChecked" checked={isChecked[keyIndex]} id="menuItem"
                 className="messageCheckbox" onChange={(e) => selectItem(e, info._id, info.name, keyIndex)}/>
          <div className="item-simple-content">
            <div className="item-detail col-sm-4">
              <a href="#" className="pull-left">
                <img alt="" src={info.image}/>
              </a>
            </div>
            <div className="item-detail col-sm-8">
              <h2 className="item-simple-title">{info.name}</h2>
              <ul className="item-simple-location">
                <li><a href="#">{info.category}</a></li>
              </ul>
              <p className="hline"></p>
              <p>
                <span className="currency-color pull-left">&#x20b9;&#x20b9;&#x20b9; &nbsp;
                  <span className="currency-item-color">{info.amount}</span>
                </span>
                <span className="star-option">
                  <i className="fa fa-star star-option-icon-color" aria-hidden="true"></i>
                  <span className="star-text-option">3.7</span>
                </span>
                <span className="time-option">
                    <span className="time-option-color">40</span>
                    <span className="time-text-option">Mins</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};
