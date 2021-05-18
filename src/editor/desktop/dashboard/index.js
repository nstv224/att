import React, { Component } from "react";
import styles from "./index.module.css";
import Button from "../../../Utils/button";
import Table from "./table";
import { BsBraces } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaEraser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GoPlay } from "react-icons/go";
import { format } from "sql-formatter";
import CodeMirror from "@uiw/react-codemirror";
import FindModal from "./find";
import { ResizableBox } from "react-resizable";
import "codemirror/addon/display/autorefresh";
import "codemirror/addon/comment/comment";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/keymap/sublime";
import "codemirror/theme/erlang-dark.css";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.codeMirror = React.createRef();
  }
  componentDidMount() {
    this.setState({
      innerHeight: window.innerHeight - window.innerHeight / 10,
      innerWidth: window.innerWidth / 2,
    });
  }

  state = {
    code: "SELECT * FROM ORDERS",
    playButton: false,
    openFindModal: false,
    innerHeight: 0,
    innerWidth: 0,
  };

  prettify = () => {
    const cm = this.codeMirror.current.editor;
    cm.doc.setValue(format(this.state.code));
    this.setState({
      code: format(this.state.code),
    });
  };
  clearCode = () => {
    const cm = this.codeMirror.current.editor;
    cm.doc.setValue("");
    this.setState({
      code: "",
      playButton: false,
    });
  };

  getCurrentCode = () => {
    const cm = this.codeMirror.current.editor;
    return cm.doc.getValue();
  };

  runQuery = () => {
    this.setState({
      playButton: true,
    });
  };
  openFindModal = () => {
    this.setState({
      openFindModal: true,
    });
  };
  closeFindModal = () => {
    this.setState({
      openFindModal: false,
    });
  };
  render() {
    return (
      <>
        <div className={`${styles.dashboard}`}>
          <div className={styles.topbar}>
            <div className={`${styles.left__container} text-lg`}>
              <Button
                text="Prettify"
                className={styles.btn}
                style={{ marginLeft: 0 }}
                onClick={this.prettify}
                Icon={BsBraces}
              />
            </div>
            <div className={`${styles.right__container} text-lg`}>
              <Button
                text="Run"
                className={styles.btn}
                Icon={AiFillPlayCircle}
                onClick={this.runQuery}
              />
              <Button
                text="Clear"
                className={styles.btn}
                onClick={this.clearCode}
                Icon={FaEraser}
              />
              <Button
                text="Find"
                className={styles.btn}
                style={{ marginRight: 0 }}
                onClick={this.openFindModal}
                Icon={FiSearch}
              />
            </div>
          </div>

          <div className={styles.body}>
            <ResizableBox
              className={styles.resizable__container}
              axis="x"
              width={this.state.innerWidth}
              height={this.state.innerHeight}
              handle={<div className={styles.custom__handle}></div>}
              handleSize={[8, 8]}
            >
              <div className={`${styles.panel} ${styles.editor}`}>
                <CodeMirror
                  value={this.state.code}
                  ref={this.codeMirror}
                  options={{
                    theme: "erlang-dark",
                    tabSize: 2,
                    keyMap: "sublime",
                    mode: "sql",
                  }}
                />
              </div>
              <div className={styles.play__btn__container}>
                <div className={styles.play__btn__back}>
                  <GoPlay
                    className={styles.play__btn}
                    onClick={this.runQuery}
                  />
                </div>
              </div>
            </ResizableBox>
            <div className={`${styles.panel} ${styles.editor__output}`}>
              {this.state.playButton && this.getCurrentCode() !== "" ? (
                <Table />
              ) : (
                <p className={styles.output__text}>
                  Execute a valid query first, Like:
                  <br />
                  <br />
                  <span className="text-light-warning">
                    SELECT * FROM {"  "}
                  </span>
                  ORDERS
                </p>
              )}
            </div>
          </div>
        </div>
        <FindModal
          open={this.state.openFindModal}
          closeFindModal={this.closeFindModal}
        />
      </>
    );
  }
}
