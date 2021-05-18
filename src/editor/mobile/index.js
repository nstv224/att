import React, { Component } from "react";
import Navbar from "../../navbar";
import styles from "./index.module.css";
import Dashboard from "./dashboard";
import Sidebar from "../../sidebar";

export default class index extends Component {
  state = {
    sidebar: false,
    sidebarStyles: {
      overlay__container: {
        left: "-100%",
      },
      overlay: {
        backgroundColor: "#0000005c",
        flex: "0.85",
        transitionDelay: "0.2s",
      },
    },
  };
  toggleSidebar = () => {
    console.log(this.state.sidebar);
    this.setState({
      sidebar: !this.state.sidebar,
      sidebarStyles: {
        overlay__container: {
          left: "0%",
        },
        overlay: {
          backgroundColor: "#0000005c",
          flex: "0.85",
          transitionDelay: "0.2s",
        },
      },
    });
  };
  closeSidebar = () => {
    this.setState({
      sidebarStyles: {
        overlay__container: {
          left: "-100%",
        },
        overlay: {
          backgroundColor: "transparent",
          flex: "0.85",
          transitionDelay: "0s",
        },
      },
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <Sidebar
          closeSidebar={this.closeSidebar}
          sidebarStyles={this.state.sidebarStyles}
        />
        <Navbar toggleSidebar={this.toggleSidebar} />
        <Dashboard />
      </div>
    );
  }
}
