import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllPlaces, getPlaceInfo } from "../redux/actions/location_actions";
import Map from "./MyMapComponent";
import Header from "./Header";


class Wrapper extends Component {

    componentDidMount = () => {
        // let stateInStorage = JSON.parse(JSON.stringify(sessionStorage.getItem("locations_on_map")));
        let stateInStorage = JSON.parse(sessionStorage.getItem("locations_on_map"));
        console.log("persisting state in session storage => ");
        console.log(stateInStorage);
        this.props.getAllPlaces();
    }

    render () {
        return (
            <div className="wrapper">
                <Map></Map>
            </div>
        )
    }
}

Wrapper.propTypes = {
    locations: PropTypes.object.isRequired,
    getAllPlaces: PropTypes.func.isRequired,
    getPlaceInfo: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        locations: state.locations
    }
}

const mapDispatchToProps = {
    getAllPlaces,
    getPlaceInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);