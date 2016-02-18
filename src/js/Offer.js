import React from 'react';
import OfferHeader from './OfferHeader';
import OfferContent from './OfferContent';

class Offer extends React.Component {
  constructor() {
    super();
    this.onChildChanged = this.onChildChanged.bind(this);
    this.state = {
      expanded: '',
      checked: false
    }
  }
  componentWillMount() {
    if (this.props.index === 0) {
      this.onChildChanged(true);
    }
  }
  onChildChanged(newState) {
    var expandClass = '';
    if (newState) {
      expandClass = newState ? 'expanded' : '';
    }
    // reset all dom bit of a react-hack
    let offersDOM = document.querySelectorAll('.offer');
    [...offersDOM].forEach(function(el) {
      el.className = "offer ";
    })
    this.setState({
      expanded: expandClass
    })
  }
  render() {
    let data = this.props.data;
    return ( 
      <article className={"offer " + this.state.expanded}>
        <OfferHeader name={data.name} apr={data.apr} callbackParent={this.onChildChanged} initialChecked={this.state.checked}   />
        <OfferContent cashback={data.cashback} information={data.information} code={data.code} />
      </article>
    );
  }
}
export default Offer