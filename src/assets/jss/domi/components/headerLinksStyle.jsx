// ##############################
// // // HeaderLinks styles
// #############################

import { defaultFont } from "assets/jss/domi";

const headerLinksStyle = theme => ({
    list: {
        ...defaultFont,
        fontSize: "14px",
        margin: 0,
        paddingLeft: "0",
        listStyle: "none",
        paddingTop: "0",
        paddingBottom: "0",
        color: "inherit"
    },
    listItem: {
        float: "left",
        color: "inherit",
        position: "relative",
        display: "block",
        width: "auto",
        margin: "0",
        padding: "0"
    },
    icons: {
        width: "20px",
        height: "20px",
        marginRight: "3px"
    }
});

export default headerLinksStyle;
