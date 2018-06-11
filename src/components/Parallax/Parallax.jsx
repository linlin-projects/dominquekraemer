import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// material-ui components
import { withStyles } from "@material-ui/core/styles";

// core components
import parallaxStyle from "assets/jss/domi/components/parallaxStyle.jsx";

class Parallax extends React.Component {
    constructor(props) {
        super(props);
        const windowScrollTop = window.pageYOffset / 3;
        this.state = {
            transform: `translate3d(0,${windowScrollTop}px,0)`
        };
        this.resetTransform = this.resetTransform.bind(this);
    }
    componentDidMount() {
        const windowScrollTop = window.pageYOffset / 3;
        this.setState({
            transform: `translate3d(0,${windowScrollTop}px,0)`
        });
        window.addEventListener("scroll", this.resetTransform);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.resetTransform);
    }
    resetTransform() {
        const windowScrollTop = window.pageYOffset / 3;
        this.setState({
            transform: `translate3d(0,${windowScrollTop}px,0)`
        });
    }
    render() {
        const { children, style, image } = this.props;

        return (
            <div
                className={"page-header-image"}
                style={{
                    ...style,
                    backgroundImage: `url(${image})`,
                    ...this.state
                }}
                ref="parallax"
            >
                {children}
            </div>
        );
    }
}

Parallax.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    filter: PropTypes.bool,
    children: PropTypes.node,
    style: PropTypes.string,
    image: PropTypes.string
};

export default withStyles(parallaxStyle)(Parallax);
