import React, { Component } from "react";
import styles from "./index.module.css";
import Media from "react-media";
import Hamburger from "./hamburger";
import { HiOutlineDatabase } from "react-icons/hi";
import { RiArrowDropDownLine, RiAccountCircleLine } from "react-icons/ri";
import { BiMessageRounded, BiHelpCircle } from "react-icons/bi";
import Button from "../Utils/button";
import { Link } from "react-router-dom";

export default class index extends Component {
  state = {
    toggleAccountOptions: false,
  };

  toggleAccountOptions = () => {
    this.setState({
      toggleAccountOptions: !this.state.toggleAccountOptions,
    });
  };
  render() {
    return (
      <Media
        queries={{
          small: "(max-width: 768px)",
          large: "(min-width: 769px)",
        }}
      >
        {(matches) => (
          <>
            {matches.small && (
              <>
                <div className={`${styles.navbar} p-4 bg-secondary text-lg`}>
                  <Hamburger onClick={this.props.toggleSidebar} />
                  <div className={styles.navigation}>
                    <div className={styles.navbar__brand}>
                      <HiOutlineDatabase className={styles.brand__icon} />
                      <Link to="/">
                        {" "}
                        <p className={`${styles.navbar__brand__text} text-xl`}>
                          SQL EDITOR
                        </p>
                      </Link>
                    </div>

                    <div className={styles.navigation__links}>
                      <div className={styles.account}>
                        <RiAccountCircleLine className={styles.icon} />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {matches.large && (
              <>
                <div className={`${styles.navbar} p-4 bg-secondary text-lg`}>
                  <Hamburger onClick={this.props.toggleSidebar} />
                  <div className={styles.navigation}>
                    <div className={styles.navbar__brand}>
                      <HiOutlineDatabase className={styles.brand__icon} />
                      <Link to="/">
                        {" "}
                        <p className={`${styles.navbar__brand__text} text-xl`}>
                          SQL EDITOR
                        </p>
                      </Link>
                    </div>

                    <div className={styles.navigation__links}>
                      <Button
                        text="Feedback"
                        className={styles.nav__item}
                        Icon={BiMessageRounded}
                      />
                      <Button
                        text="Help"
                        className={styles.nav__item}
                        Icon={BiHelpCircle}
                      />
                      <div
                        className={styles.account}
                        onMouseEnter={this.toggleAccountOptions}
                        onMouseLeave={this.toggleAccountOptions}
                      >
                        <RiAccountCircleLine className={styles.icon} />
                        <p>shekhaliul44</p>
                        <RiArrowDropDownLine className={styles.icon} />
                        {this.state.toggleAccountOptions && (
                          <div className={styles.account__option}>
                            <p className={styles.account__signout}>sign out</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </Media>
    );
  }
}
