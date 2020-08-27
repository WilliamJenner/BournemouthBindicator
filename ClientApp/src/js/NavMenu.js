var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from "react";
import { Container, Navbar, NavbarBrand, NavbarToggler, } from "reactstrap";
import { Link } from "react-router-dom";
import "../NavMenu.css";
var NavMenu = /** @class */ (function (_super) {
    __extends(NavMenu, _super);
    function NavMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.toggleNavbar = _this.toggleNavbar.bind(_this);
        _this.state = {
            collapsed: true,
        };
        return _this;
    }
    NavMenu.prototype.toggleNavbar = function () {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    NavMenu.prototype.render = function () {
        return (React.createElement("header", null,
            React.createElement(Navbar, { className: "navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3", light: true },
                React.createElement(Container, null,
                    React.createElement(NavbarBrand, { tag: Link, to: "/" }, "Bournemouth Bindicator"),
                    React.createElement(NavbarToggler, { onClick: this.toggleNavbar, className: "mr-2" })))));
    };
    NavMenu.displayName = NavMenu.name;
    return NavMenu;
}(Component));
export { NavMenu };
