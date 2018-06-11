import React, { Component } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false
        };
    }

    handleDrawerToggle = isDrawer => {
        this.setState({
            mobileOpen: !this.state.mobileOpen
        });
        if (!this.state.mobileOpen) {
            document.getElementById("root").classList.add("nav-open");
        } else {
            document.getElementById("root").classList.remove("nav-open");
        }
    };

    closeDrawerToggle = () => {
        if (this.state.mobileOpen) {
            document.getElementById("root").classList.remove("nav-open");
        }
    };
    componentDidMount() {
        if (this.props.changeColorOnScroll) {
            window.addEventListener("scroll", this.headerColorChange);
        }
        //document.body.addEventListener("click", this.handleDrawerToggle);
    }

    headerColorChange = () => {
        const { changeColorOnScroll } = this.props;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > changeColorOnScroll.height) {
            document.body
                .getElementsByTagName("nav")[0]
                .classList.remove("navbar-transparent");
        } else {
            document.body
                .getElementsByTagName("nav")[0]
                .classList.add("navbar-transparent");
        }
    };

    componentWillUnmount() {
        if (this.props.changeColorOnScroll) {
            window.removeEventListener("scroll", this.headerColorChange);
        }
        //document.body.removeEventListener("click", this.handleDrawerToggle);
    }
    render() {
        return (
            <nav
                className="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent "
                color-on-scroll="400"
            >
                <div className="container">
                    <div className="dropdown button-dropdown">
                        <a
                            href="#pablo"
                            className="dropdown-toggle"
                            id="navbarDropdown"
                            data-toggle="dropdown"
                        >
                            <span className="button-bar" />
                            <span className="button-bar" />
                            <span className="button-bar" />
                        </a>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <a className="dropdown-header">Dropdown header</a>
                            <a className="dropdown-item" href="/action">
                                Action
                            </a>
                            <a className="dropdown-item" href="/anotherAction">
                                Another action
                            </a>
                            <a className="dropdown-item" href="/somethingElse">
                                Something else here
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="/separatedLink">
                                Separated link
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="/moreLink">
                                One more separated link
                            </a>
                        </div>
                    </div>
                    <div className="navbar-translate">
                        <a
                            className="navbar-brand"
                            href="/test"
                            rel="tooltip"
                            title="Designed by Invision. Coded by Creative Tim"
                            data-placement="bottom"
                        >
                            DK Design Studio
                        </a>
                        <button
                            className="navbar-toggler navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navigation"
                            aria-controls="navigation-index"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={() =>
                                this.handleDrawerToggle(!this.state.mobileOpen)
                            }
                        >
                            <span className="navbar-toggler-bar bar1" />
                            <span className="navbar-toggler-bar bar2" />
                            <span className="navbar-toggler-bar bar3" />
                        </button>
                    </div>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navigation"
                        data-nav-image={require("assets/img/blurred-image-1.jpg")}
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/back">
                                    Back to Kit
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/issue">
                                    Have an issue?
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    rel="tooltip"
                                    title="Follow us on Twitter"
                                    data-placement="bottom"
                                    href="/twitter"
                                    target="_blank"
                                >
                                    <i className="fa fa-twitter" />
                                    <p className="d-lg-none d-xl-none">
                                        Twitter
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    rel="tooltip"
                                    title="Like us on Facebook"
                                    data-placement="bottom"
                                    href="/facebook"
                                    target="_blank"
                                >
                                    <i className="fa fa-facebook-square" />
                                    <p className="d-lg-none d-xl-none">
                                        Facebook
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    rel="tooltip"
                                    title="Follow us on Instagram"
                                    data-placement="bottom"
                                    href="/instagram"
                                    target="_blank"
                                >
                                    <i className="fa fa-instagram" />
                                    <p className="d-lg-none d-xl-none">
                                        Instagram
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

Header.propTypes = {
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

export default Header;
