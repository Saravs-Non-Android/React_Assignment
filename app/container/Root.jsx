/**
 * Created by Mohan Rathour on 18/06/17.
 */
import React from "react";
import {connect} from "react-redux";
import {ItemAction} from "../actions/ItemAction";
import {AddToCartAction} from "../actions/OrderAction";
import {ItemsList} from "../components/ItemsList";
import {SearchItems} from "../actions/SearchAction";

import _ from 'underscore';

/**
 * Call the Item action function.
 * @param dispatch
 * @returns {{ItemAction: (function()), AddToCartAction: (function(*=))}}
 */
const mapDispatchToProps = (dispatch) => {
  return {
    ItemAction: () => {
      return dispatch(ItemAction());
    },

    AddToCartAction: (cartData) => {
      return dispatch(AddToCartAction(cartData));
    },

    SearchItems: (formData) => {
      dispatch(SearchItems(formData));
    }
  };
};

/**
 * Get the restaurant data and order success message from reducer.
 * @param state
 * @returns {{items: (*|string|DataTransferItemList), message}}
 */
const mapStateToProps = (state) => {
  return {items: state.items, message: state.message}
};

/**
 * Root Class
 */
class Root extends React.Component {
  /**
   * Constructor
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      checkedValue: [],
      loading: true,
      isChecked: [],
      name: "",
      city: "",
      cuisine: "",
      budget: "",
      sortBy: "",
    };
    /**
     * Call ItemAction Action function.
     */
    this.props.ItemAction();
  };

  /**
   * Search restaurant on the basis of search text.
   * @param event
   */
  search = (event) => {
    event.preventDefault();
    this.props.SearchItems(this.state);
  };

  /**
   * Set the search text data into the state object
   * @param event
   */
  searchByText = (event) => {
    this.state[event.target.name] = event.target.value;
    this.setState(this.state);
  };

  /**
   * Filter the restaurant search data on to the basis of different filter.
   * @param event
   */
  filter = (event) => {
    this.state[event.target.name] = event.target.value;
    this.setState(this.state);
    this.props.SearchItems(this.state);
  };

  /**
   * Set the loading false When DOM update
   */
  componentDidUpdate() {
    setTimeout(() => this.setState({loading: false}), 500);
  };

  /**
   * add the order into the AddToCart
   * @param id
   * @param name
   * @param isChecked
   */
  addToCart = (id, name, isChecked) => {
    if (isChecked) {
      this.state.checkedValue.push(id + "-" + name)
    } else {
      let index = this.state.checkedValue.indexOf(id + "-" + name);
      if (index > -1) {
        this.state.checkedValue.splice(index, 1);
      }
    }
  };

  /**
   * Select the item for order
   * @param e
   * @param id
   * @param name
   */
  selectItem = (e, id, name, key) => {
    let isChecked = this.state.isChecked;
    isChecked[key] = !!isChecked[key] ? false : true;
    this.setState({
      isChecked
    });
    this.addToCart(id, name, isChecked[key]);
  };

  /**
   * Handle the order submit action
   */
  handleSubmit = () => {
    if (!_.isEmpty(this.state.checkedValue)) {
      this.props.AddToCartAction(this.state.checkedValue).then((response) => {
        if (response.payload === 'OK') {
          alert("Below Restaurant Order created successfully" +
            "\n" + this.state.checkedValue.map(function(i) {
            return i.split("-")[1]
          }));
        } else alert("Something went wrong \n"+ payload);
      }).catch(error => {
        alert("Something went wrong \n" + error);
      });
    } else {
      alert('Please select at least one item');
    }
  };

  /**
   * Render the restaurant list data
   * @returns {*}
   */
  render() {
    const {loading} = this.state;

    if (loading) {
      return null; // render null when app is not ready
    }
    return (<ItemsList
              items={this.props.items}
              handleSubmit={this.handleSubmit}
              search={this.search}
              searchByText={this.searchByText}
              filter={this.filter}
              state={this.state}
              selectItem={this.selectItem}
            />);
  }
}

/**
 * attach  both Reducer and Action into the Root Container.
 */
export default connect(mapStateToProps, mapDispatchToProps)(Root);
