// ##############################
// // // Header styles
// #############################

import { defaultFont, container } from "assets/jss/domi.jsx";

const headerStyle = {
    appBar: {
        display: "flex",
        border: "0",
        borderRadius: "3px",
        padding: "0.625rem 0",
        marginBottom: "20px",
        color: "#555",
        width: "100%",
        backgroundColor: "#fff",
        boxShadow:
            "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
        transition: "all 150ms ease 0s",
        alignItems: "center",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        position: "relative"
    },
    transparent: {
        backgroundColor: "red", //"transparent !important",
        boxShadow: "none",
        paddingTop: "25px",
        color: "#FFFFFF"
    },
    container: {
        ...container,
        minHeight: "50px",
        flex: "1",
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        flexWrap: "nowrap"
    },
    flex: {
        flex: 1
    },
    title: {
        ...defaultFont,
        lineHeight: "30px",
        fontSize: "18px",
        borderRadius: "3px",
        textTransform: "none",
        color: "inherit",
        "&:hover,&:focus": {
            color: "inherit",
            background: "transparent"
        }
    }
};

export default headerStyle;