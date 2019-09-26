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
      //TODO-4  : TODO-4 attach the  props and dispatcher to Search component.
    }
  };
};

/**
 * Get the restaurant data and order success message from reducer.
 * @param state
 * @returns {{items: (*|string|DataTransferItemList), message}}
 */
const mapStateToProps = (state) => {
  //TODO-4  : TODO-4 attach the  props(items , message) and dispatcher to Search component.
	if (state.items.length > 0) {
		return {
			items: state.items,
		};
	} else {
		return {
			items: [],
		}
	}
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
    // TODO-7 - Prevent the event and call the Search Item action with appropriate state object.
  };

  /**
   * Set the search text data into the state object
   * @param event
   */
  searchByText = (event) => {
    //TODO-8 set the search text into the state object from event target object.
  };

  /**
   * Filter the restaurant search data on to the basis of different filter.
   * @param event
   */
  filter = (event) => {
    // TODO-6  set the filter option into the state object from event target object and call the Search item object.
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
      //TODO -10 Add the data in the format of "id"+"-"+"name" into the state checkedValue array.
    } else {
      //TODO -11 remove the data in the format of "id"+"-"+"name" from the state checkedValue array.
    }
  };

  /**
   * Select the item for order
   * @param e
   * @param id
   * @param name
   */
  selectItem = (e, id, name, key) => {
    // TODO-1 Add the functionality to check the checkbox via setting state target name
    // TODO-2 Call the addToCart Props function with id, name and checked or unchecked
  };

  /**
   * Handle the order submit action
   */
  handleSubmit = () => {
    if (!_.isEmpty(this.state.checkedValue)) {
      //TODO-12 Call the addToCart props dispatch action and handle the promise object to display the popup message into the below format /** alert("Below Restaurant Order created successfully" + "\n" + this.state.checkedValue.map(function(i) { return i.split("-")[1] }));**/ //and catch the error if present
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

    return (
		<ItemsList
				items={this.props.items}
				handleSubmit={this.handleSubmit}
				search={this.search}
				searchByText={this.searchByText}
				filter={this.filter}
				state={this.state}
				selectItem={this.selectItem}
				/>
	);
  }
}

/**
 * attach  both Reducer and Action into the Root Container.
 */
export default connect(mapStateToProps, mapDispatchToProps)(Root);
