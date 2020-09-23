import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MyMapComponent from "./MyMapComponent";

class Map extends Component {

    render () {
        return (
            <div id="map">

            </div>
        )
    }
}

Map.propTypes = {
    locations: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        locations: state.locations
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Map);