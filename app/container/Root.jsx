import React from "react";
import {connect} from "react-redux";
import {ItemAction} from "../actions/ItemAction";
import {AddToCartAction} from "../actions/OrderAction";
import {ItemsList} from "../components/ItemsList";
import _ from 'underscore';

const mapDispatchToProps = (dispatch) => {
  return {
    ItemAction: () => {
      return dispatch(ItemAction());
    },

    AddToCartAction: (cartData) => {
      return dispatch(AddToCartAction(cartData));
    }
  };
};

const mapStateToProps = (state) => {
  return {items: state.items, message: state.message}
};

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedValue: [],
      loading: true

    }
    this.props.ItemAction();
  }
  componentDidUpdate() {
    setTimeout(() => this.setState({loading: false}), 500);
  }

  addToCart = (id, name, isChecked) => {
    if (isChecked) {
      this.state.checkedValue.push(id + "-" + name)
    } else {
      let index = this.state.checkedValue.indexOf(id + "-" + name);
      if (index > -1) {
        this.state.checkedValue.splice(index, 1);
      }
    }
  }

  handleSubmit = () => {
    if (!_.isEmpty(this.state.checkedValue)) {
      this.props.AddToCartAction(this.state.checkedValue).then((response) => {
        if (response.payload === 'OK') {
          alert("Below Restaurant Order created successfully" +
            "\n" + this.state.checkedValue.map(function(i) {
            return i.split("-")[1]
          }));
        } else {
          alert("Something went wrong", payload);
        }
      }).catch(error => {
        alert("Something went wrong", error);
      });
    } else {
      alert('Please select at least one item');
    }
  }

  render() {
    const {loading} = this.state;

    if (loading) {
      return null; // render null when app is not ready
    }
    return (<ItemsList items={this.props.items} handleSubmit={this.handleSubmit} addToCart={this.addToCart}/>);
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Root);
