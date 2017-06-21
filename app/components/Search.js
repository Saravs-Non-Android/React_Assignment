import React from "react";
import {connect} from "react-redux";
import {SearchItems} from "../actions/SearchAction";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      city: "",
      cuisine: "",
      budget: "",
      sortBy: "",
      loading:true
    }
  }

  search = (event) => {
    event.preventDefault();
    this.props.SearchItems(this.state);
  }

  searchByText = (event) => {
    this.state[event.target.name] = event.target.value;
    this.setState(this.state);
  }

  filter = (event) => {
    this.state[event.target.name] = event.target.value;
    this.setState(this.state);
    this.props.SearchItems(this.state);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 col-md-offset-0">
          <div className="form-section">
            <form role="form" className="form" name="searchForm" id="searchForm" onSubmit={(e) => this.search(e)}>
              <div className="row">
                <div className="col-md-2">
                  <div className="form-group">
                    <select className="form-control" name="city" id="city" onChange={(e) => this.filter(e)} value={this.state.city}>
                      <option value="">CITIES</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Bangalore">Bangalore</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-8 pull-left">
                  <div className="form-group form-control-by-1">
                    <input type="text" className="form-control-search search-input-box" id="name" name="name" value={this.state.name} onChange={(e) => this.searchByText(e)} placeholder="&#61442; Search for restaurants"/>
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
                    <select className="form-control form-control-by-1" name="cuisine" id="cuisine" value={this.state.cuisine} onChange={(e) => this.filter(e)}>
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
                    <select className="form-control form-control-by-2" name="budget" id="budget" value={this.state.budget} onChange={(e) => this.filter(e)}>
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
                    <select className="form-control" name="sortBy" id="sortBy" value={this.state.sortBy} onChange={(e) => this.filter(e)}>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SearchItems: (formData) => {
      dispatch(SearchItems(formData));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
