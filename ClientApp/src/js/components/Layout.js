import React, { Component } from 'react';
import { Container } from 'reactstrap';
export class Layout extends Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(Container, null, this.props.children)));
    }
}
Layout.displayName = Layout.name;
