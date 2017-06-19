const React = require("react");

module.exports = React.createClass({
    render: function () {
        return (
            <div className="col-sm-6">
                <div className="item-simple">
                    <input type="checkbox" name="menuItem[]" id="menuItem" className="messageCheckbox" value= {this.props.info._id +"-"+ this.props.info.name } ref="test" onClick={this.handleChange}/>
                    <div className="item-simple-content">
                        <div className="item-detail col-sm-4">
                            <a href="#" className="pull-left">
                                <img alt=""
                                     src={this.props.info.image}/>
                            </a>
                        </div>
                        <div className="item-detail col-sm-8">
                            <h2 className="item-simple-title">{this.props.info.name}</h2>
                            <ul className="item-simple-location">
                                <li><a href="#">{this.props.info.category}</a></li>
                            </ul>
                            <p className="hline"></p>
                            <p>
                                <span className="currency-color pull-left">&#x20b9;&#x20b9;&#x20b9; &nbsp;<span className="currency-item-color">{this.props.info.amount}</span></span>
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

        )
    }
})