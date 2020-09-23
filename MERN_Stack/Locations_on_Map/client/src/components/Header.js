import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
    render () {
        return (
            <div className="header m-1 p-1">
                <p>Locations on map</p>
            </div>
        )

    }
}

Header.propTypes = {
    
}

const mapStateToPorps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToPorps, mapDispatchToProps)(Header);