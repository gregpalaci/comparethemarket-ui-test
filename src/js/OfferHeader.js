import React from 'react';

class OfferHeader extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            expanded: false,
        }
    }
    handleClick() {
        var newState = !this.state.checked;
        this.setState({
            checked: newState
        });
        this.props.callbackParent(newState);
    }

    render() {
        let name = this.props.name;
        let apr = this.props.apr;
 return (
   <header className="row" onClick={this.handleClick.bind(this)}>
      <div className="header-section-toggle col-xs row">
        <div className="col-xs-12 col-md-6">
        <h3 className="card-title">
          <a href="#" className="">
            <span className="arrow-decoration">></span> {name}
          </a>
        </h3>
        </div>
        <div className="col-xs-12 col-md-6">
        <h3 className="card-rate txt-r">
          <strong>{apr}%</strong> APR
        </h3>
        </div>
      </div>
    </header>
    )
  }
}

export default OfferHeader;