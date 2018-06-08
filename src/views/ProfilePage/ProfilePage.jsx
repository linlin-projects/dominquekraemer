import React from "react";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import { withStyles } from "@material-ui/core/styles";
import Parallax from "components/Parallax/Parallax.jsx";

import profilePageStyle from "assets/jss/domi/views/profilePage.jsx";

const ProfilePage = ({ classes, ...rest }) => {
    return (
        <div className="profile-page">
            <Header
                color="transparent"
                brand="DK Design Studio"
                rightLinks={<HeaderLinks />}
                fixed
                {...rest}
            />
            <div
                className="page-header page-header-small"
                filter-color="orange"
            >
                <Parallax filter image={require("assets/img/bg5.jpg")} />
                <div className="container">
                    <div className="content-center">
                        <div className="photo-container">
                            <img src={require("assets/img/ryan.jpg")} alt="" />
                        </div>
                        <h3 className="title">Dominique Krämer</h3>
                        <p className="category">Architect</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withStyles(profilePageStyle)(ProfilePage);
