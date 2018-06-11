import React from "react";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import { withStyles } from "@material-ui/core/styles";
import Parallax from "components/Parallax/Parallax.jsx";

import profilePageStyle from "assets/jss/domi/views/profilePage.jsx";

const ProfilePage = ({ classes, ...rest }) => {
    return (
        <div className="profile-page sidebar-collapse">
            <Header
                color="transparent"
                brand="DK Design Studio"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 200,
                    color: "white"
                }}
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
            <div className="section">
                <div className="container">
                    <div className="button-container">
                        <a
                            href="#button"
                            className="btn btn-primary btn-round btn-lg"
                        >
                            Follow
                        </a>
                        <a
                            href="#button"
                            className="btn btn-default btn-round btn-lg btn-icon"
                            rel="tooltip"
                            title="Follow me on Twitter"
                        >
                            <i className="fa fa-twitter" />
                        </a>
                        <a
                            href="#button"
                            className="btn btn-default btn-round btn-lg btn-icon"
                            rel="tooltip"
                            title="Follow me on Instagram"
                        >
                            <i className="fa fa-instagram" />
                        </a>
                    </div>
                    <h3 className="title">About me</h3>
                    <h5 className="description">
                        An artist of considerable range, Ryan — the name taken
                        by Melbourne-raised, Brooklyn-based Nick Murphy —
                        writes, performs and records all of his own music,
                        giving it a warm, intimate feel with a solid groove
                        structure. An artist of considerable range.
                    </h5>
                    <div className="row">
                        <div className="col-md-6 ml-auto mr-auto">
                            <h4 className="title text-center">My Portfolio</h4>
                            <div className="nav-align-center">
                                <ul
                                    className="nav nav-pills nav-pills-primary"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#profile"
                                            role="tablist"
                                        >
                                            <i className="now-ui-icons design_image" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            data-toggle="tab"
                                            href="#home"
                                            role="tablist"
                                        >
                                            <i className="now-ui-icons location_world" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#messages"
                                            role="tablist"
                                        >
                                            <i className="now-ui-icons sport_user-run" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-content gallery">
                            <div
                                className="tab-pane active"
                                id="home"
                                role="tabpanel"
                            >
                                <div className="col-md-10 ml-auto mr-auto">
                                    <div className="row collections">
                                        <div className="col-md-6">
                                            <img
                                                src={require("assets/img/bg1.jpg")}
                                                alt=""
                                                className="img-raised"
                                            />
                                            <img
                                                src={require("assets/img/bg3.jpg")}
                                                alt=""
                                                className="img-raised"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <img
                                                src={require("assets/img/bg8.jpg")}
                                                alt=""
                                                className="img-raised"
                                            />
                                            <img
                                                src={require("assets/img/bg7.jpg")}
                                                alt=""
                                                className="img-raised"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="tab-pane"
                                id="profile"
                                role="tabpanel"
                            >
                                <div className="col-md-10 ml-auto mr-auto">
                                    <div className="row collections">
                                        <div className="col-md-6">
                                            <img
                                                src={require("assets/img/bg6.jpg")}
                                                className="img-raised"
                                                alt=""
                                            />
                                            <img
                                                src={require("assets/img/bg11.jpg")}
                                                alt=""
                                                className="img-raised"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <img
                                                src={require("assets/img/bg7.jpg")}
                                                alt=""
                                                className="img-raised"
                                            />
                                            <img
                                                src={require("assets/img/bg8.jpg")}
                                                alt=""
                                                className="img-raised"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane"
                                id="messages"
                                role="tabpanel"
                            >
                                <div className="col-md-10 ml-auto mr-auto">
                                    <div className="row collections">
                                        <div className="col-md-6">
                                            <img
                                                src={require("assets/img/bg3.jpg")}
                                                className="img-raised"
                                                alt=""
                                            />
                                            <img
                                                src={require("assets/img/bg8.jpg")}
                                                alt=""
                                                className="img-raised"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <img
                                                src={require("assets/img/bg7.jpg")}
                                                alt=""
                                                className="img-raised"
                                            />
                                            <img
                                                src={require("assets/img/bg6.jpg")}
                                                alt=""
                                                className="img-raised"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withStyles(profilePageStyle)(ProfilePage);
