'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import ReactTelephoneInput from 'react-telephone-input'

console.log('ReactTelephoneInput: ', ReactTelephoneInput);
var App = React.createClass({
    render() {
        return (
            <div>
                <ReactTelephoneInput
                	defaultCountry='us'
                	preferredCountries={['us', 'ca', 'zz', 'hk']}
                />
                <ReactTelephoneInput
                	defaultCountry='ca'
                	initialValue=''
                	preferredCountries={['ca', 'us', 'zz', 'hk']}
                	placeholder='Please input a phone number...'
                />
            </div>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));
