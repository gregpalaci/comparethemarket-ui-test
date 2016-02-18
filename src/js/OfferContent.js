import React from 'react';

const OfferContent = (props) => {
  let imgSrc = `${props.code.toLowerCase()}.png`;
  return (
    <div className="offer-content row">
      <div className="col-xs-12 col-md aligner">
        <div className="aligner-item txt-c">
          <img className="" src={`img/${imgSrc}`} />
        </div>
      </div>
      <div className="col-xs-12 col-md offer-text">
        {props.information}
        <span className="vr"></span>
      </div>
      <div className="col-xs-12 col-md">
        <div className="offer-cashback">
          <h3>Cash back</h3>
          <div>£{props.cashback}</div>
        </div>
      </div>
    </div>
  )
}

export default OfferContent;