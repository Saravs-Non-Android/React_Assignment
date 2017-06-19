import React from "react";
import {connect} from "react-redux";
import { ItemAction } from "../actions/ItemActions";
import { ItemsList } from "../components/ItemsList";

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
        this.props.ItemAction();
        console.log("Test Data", this.props);
    }
    componentDidUpdate() {
        if(!this.props.items) {
           this.setState({
                items: this.props.items
            })
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        let checkedValue = [];
        let inputElements = document.getElementsByClassName('messageCheckbox');
        for (let i = 0; inputElements[i]; ++i) {
          if (inputElements[i].checked) {

            let checkval = inputElements[i].value;
            checkedValue.push(checkval);
          }
        }
        if (!_.isEmpty(checkedValue))
          actions.addToCart(checkedValue);
        else
          alert('Please select at least one item');
    }

    render() {
         return (
            <ItemsList items= {this.props.items} handleAction={this.handleSubmit} />
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ItemAction: () => {
            dispatch(ItemAction());
        }
    };
};

const mapStateToProps = (state) => {
    return {
        items: state.listReducer
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Root);
