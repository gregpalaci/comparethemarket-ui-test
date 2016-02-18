import React from 'react';
import ReactDOM from 'react-dom';
import Offer from './Offer';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null
        };
    }
    loadOffers() {
        (async function getState(ctx) {
                try {
                    var response = await fetch('./data/cards.json');
                    var data = await response.json();
                    return ctx.setState({
                        data: data
                    });
                } catch (e) {
                    console.log("Error", e);
                    return null;
                }
            })(this);
    }

    componentDidMount() {
        this.loadOffers();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.data.length) {
          return true;
        } else {
          return false;
        } 
    }

    render() {
        let data = this.state.data;
        if(data) {
          return (
           <section>
           {
              data.map(function (offer, index) {
               return <Offer data={offer} key={offer.code} index={index} />
             }, this)
          }

           </section>
      )
        } else {
          return <div />
        }
  }
}

ReactDOM.render( <App />,
    document.getElementById('app')
);

export default App