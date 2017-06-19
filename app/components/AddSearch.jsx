const React = require("react");
//Search component
let actions = require("../actions/ItemActions");

module.exports = React.createClass({
  getInitialState: function () {
    return {
      name: "",
      city: "",
      cuisine: "",
      budget: "",
      sortBy: ""
    }
  },
  addSearch: function (e) {
    e.preventDefault();
    actions.searchItems(this.state);
  },
  handleInputChange: function (e) {
    e.preventDefault();
    let name = e.target.name;
    let state = this.state;
    state[name] = e.target.value;
    this.setState(state);
  },
  handleSelectChange: function (event) {
    let formData = {
      name: this.state.name,
      city: event.target.value,
      cuisine: this.state.cuisine,
      budget: this.state.budget,
      sortBy: this.state.sortBy,

    }
    this.setState({city: event.target.value});
    actions.searchItems(formData);
  },
  cuisineChange: function (event) {
    let formData = {
      name: this.state.name,
      city: this.state.city,
      cuisine: event.target.value,
      budget: this.state.budget,
      sortBy: this.state.sortBy,

    }
    this.setState({cuisine: event.target.value});
    actions.searchItems(formData);

  },
  budgetChange: function (event) {
    let formData = {
      name: this.state.name,
      city: this.state.city,
      cuisine: this.state.cuisine,
      budget: event.target.value,
      sortBy: this.state.sortBy,

    }
    this.setState({budget: event.target.value});
    actions.searchItems(formData);
  },
  sortByChange: function (event) {
    let formData = {
      name: this.state.name,
      city: this.state.city,
      cuisine: this.state.cuisine,
      budget: this.state.budget,
      sortBy: event.target.value,

    }
    this.setState({sortBy: event.target.value});
    actions.searchItems(formData);
  },
  render: function () {
    return (<div className="row">
      <div className="col-md-12 col-md-offset-0">
        <div className="form-section">
          <form role="form" className="form" name="searchForm" id="searchForm" onSubmit={this.addSearch}>
            <div className="row">

              <div className="col-md-2">
                <div className="form-group">
                  <select className="form-control" name="city" id="city" onChange={this.handleSelectChange}
                          value={this.state.city}>
                    <option value="">CITIES</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                  </select>
                </div>
              </div>

              <div className="col-md-8 pull-left">
                <div className="form-group form-control-by-1">
                  <input type="text" className="form-control-search search-input-box" id="name" name="name"
                         value={this.state.name} onChange={this.handleInputChange}
                         placeholder="&#61442; Search for restaurants"/>
                </div>
              </div>

              <div className="col-md-2">
                <button className="btn btn-default btn-success" type="submit">Search</button>
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
                  <select className="form-control form-control-by-1" name="cuisine" id="cuisine"
                          value={this.state.cuisine} onChange={this.cuisineChange}>
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
                  <select className="form-control form-control-by-2" name="budget" id="budget" value={this.state.budget}
                          onChange={this.budgetChange}>
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
                  <select className="form-control" name="sortBy" id="sortBy" value={this.state.sortBy}
                          onChange={this.sortByChange}>
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
    </div>)
  }
});