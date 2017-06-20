import React from "react";
import {connect} from "react-redux";
import {ItemAction, AddToCartAction} from "../actions/ItemActions";
import {ItemsList} from "../components/ItemsList";
import _ from 'underscore';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedValue: []
    }
    this.props.ItemAction();
    //this.addToCart = this.addToCart.bind(this);
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
    if (!_.isEmpty(this.state.checkedValue)){
      this.props.AddToCartAction(this.state.checkedValue);
      if(this.props.message && this.props.message == 'OK'){
        alert("Below Restaurant Order created successfully" +"\n" + this.state.checkedValue.map(
          function(i){
            return i.split("-")[1]
          })
        );
      }
    }
    else{
      alert('Please select at least one item');
    }
  }

  render() {
    return (<ItemsList items={this.props.items} handleSubmit={this.handleSubmit} addToCart={this.addToCart}/>);
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    ItemAction: () => {
      dispatch(ItemAction());
    },

    AddToCartAction: (cartData) => {
      dispatch(AddToCartAction(cartData));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    message:state.message
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Root);
