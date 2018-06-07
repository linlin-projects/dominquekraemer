import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
import headerStyle from "assets/jss/domi/components/headerStyle.jsx";

function Header(props) {
    const { classes, color, rightLinks, brand } = props;
    const appBarClasses = classNames({
        [classes.appBar]: true,
        [classes[color]]: color
    });
    const brandComponent = (
        <Button href="#" className={classes.title}>
            {brand}
        </Button>
    );
    return (
        <AppBar className={appBarClasses}>
            <Toolbar className={classes.container}>
                <div className={classes.flex}>{brandComponent}</div>
                <Hidden smDown implementation="css">
                    {rightLinks}
                </Hidden>
                <Hidden mdUp>
                    <IconButton color="inherit" aria-label="open drawer">
                        <Menu />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "transparent",
        "white",
        "rose",
        "dark"
    ]),
    rightLinks: PropTypes.node,
    brand: PropTypes.string
};

export default withStyles(headerStyle)(Header);
