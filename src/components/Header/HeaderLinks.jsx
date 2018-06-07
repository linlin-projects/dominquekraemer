import React from "react";

// material-ui components
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { CloudDownload } from "@material-ui/icons";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/domi/components/headerLinksStyle";

function HeaderLinks({ ...props }) {
    const { classes } = props;
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <Button
                    href="#"
                    color="transparent"
                    className={classes.navLink}
                >
                    <CloudDownload className={classes.icons} /> Download
                </Button>
            </ListItem>
        </List>
    );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
