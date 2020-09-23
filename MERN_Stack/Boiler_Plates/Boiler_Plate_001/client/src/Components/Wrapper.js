import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { isUserLoggedIn, userLogin, verifyCookies, setUserLogout } from "../redux/actions/user_actions";
import MainHeader from "./headers/MainHeader";
import HomePage from "./HomePage";
import UserLogIn from "./user/UserLogIn";
import RegisterUser from "./user/Register_User";
import UserAccount from "./user/User_Account";

class Wrapper extends Component {

    componentDidMount = () => {
        this.props.isUserLoggedIn();
    }

    render() {
        return (
            <div className="wrapper">
                <Router>
                <MainHeader></MainHeader>
                    <Switch>
                        <Route exact path="/"><HomePage></HomePage></Route>
                        <Route exact path="/user-login"><UserLogIn></UserLogIn></Route>
                        <Route exact path="/register-user"><RegisterUser></RegisterUser></Route>
                        <Route exact path="/user-account"><UserAccount></UserAccount></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

Wrapper.propTypes = {
    user: PropTypes.object.isRequired,
    isUserLoggedIn: PropTypes.func.isRequired,
    verifyCookies: PropTypes.func.isRequired,
    userLogin: PropTypes.func.isRequired,
    setUserLogout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    isUserLoggedIn,
    userLogin,
    verifyCookies,
    setUserLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)