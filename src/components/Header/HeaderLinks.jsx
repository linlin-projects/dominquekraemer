import React from "react";

// material-ui components
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { CloudDownload } from "@material-ui/icons";

import headerLinksStyle from "assets/jss/domi/components/headerLinksStyle";

function HeaderLinks({ ...props }) {
    const { classes } = props;
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <CloudDownload className={classes.icons} /> Download
            </ListItem>
            <ListItem className={classes.listItem}>
                <CloudDownload className={classes.icons} /> Download
            </ListItem>
        </List>
    );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
