import React from "react";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import { withStyles } from "@material-ui/core/styles";
import Parallax from "components/Parallax/Parallax.jsx";

import profilePageStyle from "assets/jss/domi/views/profilePage.jsx";

const ProfilePage = ({ classes, ...rest }) => {
    return (
        <div>
            <Header
                color="transparent"
                brand="Dominique Krämer"
                rightLinks={<HeaderLinks />}
                fixed
                {...rest}
            />
            <Parallax filter image={require("assets/img/bg5.jpg")} />
        </div>
    );
};

export default withStyles(profilePageStyle)(ProfilePage);
