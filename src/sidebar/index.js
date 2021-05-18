import React, { Component } from "react";
import styles from "./index.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import {
  HiOutlineAcademicCap,
  HiOutlineDatabase,
  HiDatabase,
} from "react-icons/hi";
import { Link } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";

export default class index extends Component {
  render() {
    return (
      <div
        className={styles.overlay__container}
        style={this.props.sidebarStyles.overlay__container}
      >
        <div className={styles.sidebar}>
          <div className={styles.top}>
            <div className={styles.sidebar__brand}>
              <HiOutlineDatabase className={` ${styles.item__icon}`} />
              <p className={`${styles.item__text} `}>SQL EDITOR</p>
            </div>
            <AiOutlineClose
              className={styles.cross}
              onClick={this.props.closeSidebar}
            />
          </div>
          <Link to="/">
            <div className={styles.item}>
              <AiOutlineHome className={styles.item__icon} />

              <p className={styles.item__text}>HOME</p>
            </div>
          </Link>
          <div className={styles.item}>
            <BiCodeAlt className={styles.item__icon} />
            <p className={styles.item__text}>SQL VIEWER</p>
          </div>
          <div className={styles.item}>
            <HiDatabase className={styles.item__icon} />
            <p className={styles.item__text}>SCHEMA</p>
          </div>
          <div className={styles.item}>
            <HiOutlineAcademicCap className={styles.item__icon} />
            <p className={styles.item__text}>TUTORIALS</p>
          </div>
        </div>
        <div
          className={styles.overlay}
          style={this.props.sidebarStyles.overlay}
          onClick={this.props.closeSidebar}
        ></div>
      </div>
    );
  }
}
