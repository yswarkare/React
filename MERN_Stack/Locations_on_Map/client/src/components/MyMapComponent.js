import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class MyMapComponent extends Component {


    render () {
        return (
            <div className="my-map-component">
                
            </div>
        )

    }
}

MyMapComponent.propTypes = {

}

const mapStateToPorps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToPorps, mapDispatchToProps)(MyMapComponent);