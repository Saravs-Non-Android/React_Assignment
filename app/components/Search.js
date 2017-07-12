/**
 * Created by Mohan Rathour on 18/06/17.
 */
import React from "react";

/**
 * Search Item Class
 */
export const Search = (props) => {
  return (
      <div className="row">
        <div className="col-md-12 col-md-offset-0">
          <div className="form-section">
            <form role="form" className="form" name="searchForm" id="searchForm" onSubmit={(e) => props.search(e)}>
              <div className="row">
                <div className="col-md-2">
                  <div className="form-group">
                    <select className="form-control" name="city" id="city" onChange={(e) => props.filter(e)} value={props.state.city}>
                      <option value="">CITIES</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Bangalore">Bangalore</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-8 pull-left">
                  <div className="form-group form-control-by-1">
                    <input type="text" className="form-control-search search-input-box" id="name" name="name" value={props.state.name} onChange={(e) => props.searchByText(e)} placeholder="&#61442; Search for restaurants"/>
                  </div>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-default btn-success" name="city" type="submit">Search</button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <div className="form-group font-group-font-size">
                    FILTER BY:
                  </div>
                </div>
                <div className="col-md-3 pull-left">
                  <div className="form-group">
                    <select className="form-control form-control-by-1" name="cuisine" id="cuisine" value={props.state.cuisine} onChange={(e) => props.filter(e)}>
                      <option value="">CUISINE</option>
                      <option value="North Indian">North Indian</option>
                      <option value="South Indian">South Indian</option>
                      <option value="Chinese">CHINESE</option>
                      <option value="Desserts">Desserts</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3 pull-left">
                  <div className="form-group">
                    <select className="form-control form-control-by-2" name="budget" id="budget" value={props.state.budget} onChange={(e) => props.filter(e)}>
                      <option value="">BUDGET</option>
                      <option value="200-399">200-399</option>
                      <option value="400-599">400-599</option>
                      <option value="600-799">600-799</option>
                      <option value="800-999">800-999</option>
                      <option value="1000-1199">1000-1199</option>
                      <option value="1200-1399">1200-1399</option>
                      <option value="1400-1599">1400-1599</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-2 pull-left">
                  <div className="form-group">
                    <select className="form-control" name="sortBy" id="sortBy" value={props.state.sortBy} onChange={(e) => props.filter(e)}>
                      <option value="">Sort By Name</option>
                      <option value="1">ASC</option>
                      <option value="-1">DESC</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};