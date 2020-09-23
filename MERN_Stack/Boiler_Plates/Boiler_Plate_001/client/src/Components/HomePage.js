import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { isUserLoggedIn } from "../redux/actions/user_actions";

class HomePage extends Component {

    componentDidMount = () => {

    }

    render() {
        return (
            <div>
                <p>Home Page</p>
            </div>
        );
    }
}

HomePage.propTypes = {
    isUserLoggedIn:PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    isUserLoggedIn
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);