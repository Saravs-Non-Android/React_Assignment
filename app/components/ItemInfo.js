import React from "react";
import {connect} from "react-redux"
//import AddSearch from "../actions/ItemActions";
class ItemInfo extends React.Component {
  constructor(props) {
      super(props);
      this.state ={
        isChecked: false,
        selectedData:[]
      }
  }

  selectItem = (e, id, name) => {
    this.setState({
      [e.target.name]: !this.state[e.target.name]
    });
    let item = !this.state[e.target.name];
    this.props.addToCart(id, name, item);
  }
  render() {
       let {info, handleSubmit} = this.props;
       return (
         <div className="col-sm-6">
             <div className="item-simple">
                 <input type="checkbox" name="isChecked" checked={this.state.isChecked} id="menuItem" className="messageCheckbox" onChange={(e) => this.selectItem(e, info._id, info.name)}/>
                 <div className="item-simple-content">
                     <div className="item-detail col-sm-4">
                         <a href="#" className="pull-left">
                             <img alt=""
                                  src={info.image}/>
                         </a>
                     </div>
                     <div className="item-detail col-sm-8">
                         <h2 className="item-simple-title">{info.name}</h2>
                         <ul className="item-simple-location">
                             <li><a href="#">{info.category}</a></li>
                         </ul>
                         <p className="hline"></p>
                         <p>
                             <span className="currency-color pull-left">&#x20b9;&#x20b9;&#x20b9; &nbsp;<span className="currency-item-color">{info.amount}</span></span>
                             <span className="star-option">
                                 <i className="fa fa-star star-option-icon-color" aria-hidden="true"></i><span className="star-text-option">3.7</span>
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
  }
}
export default connect()(ItemInfo);
// export const ItemInfo  = ({info, handleAction}) => {
//         return (
//           <div className="col-sm-6">
//               <div className="item-simple">
//                   <input type="checkbox" name="menuItem[]" id="menuItem" className="messageCheckbox" value= {info._id +"-"+ info.name } ref="test" onClick={handleSubmit}/>
//                   <div className="item-simple-content">
//                       <div className="item-detail col-sm-4">
//                           <a href="#" className="pull-left">
//                               <img alt=""
//                                    src={info.image}/>
//                           </a>
//                       </div>
//                       <div className="item-detail col-sm-8">
//                           <h2 className="item-simple-title">{info.name}</h2>
//                           <ul className="item-simple-location">
//                               <li><a href="#">{info.category}</a></li>
//                           </ul>
//                           <p className="hline"></p>
//                           <p>
//                               <span className="currency-color pull-left">&#x20b9;&#x20b9;&#x20b9; &nbsp;<span className="currency-item-color">{info.amount}</span></span>
//                               <span className="star-option">
//                                   <i className="fa fa-star star-option-icon-color" aria-hidden="true"></i><span className="star-text-option">3.7</span>
//                               </span>
//                                <span className="time-option">
//                                    <span className="time-option-color">40</span>
//                                    <span className="time-text-option">Mins</span>
//                                </span>
//                           </p>
//                       </div>
//                   </div>
//               </div>
//           </div>
//     );
// }
