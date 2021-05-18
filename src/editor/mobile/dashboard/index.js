import React, { Component } from "react";
import styles from "./index.module.css";
import Button from "../../../Utils/button";
// import Table from "./table";
import { BsBraces } from "react-icons/bs";
import { FaEraser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GoPlay } from "react-icons/go";
import { IoCloseCircleSharp } from "react-icons/io5";
import { format } from "sql-formatter";
import CodeMirror from "@uiw/react-codemirror";
import FindModal from "../../desktop/dashboard/find";
import Table from "../../desktop/dashboard/table";
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

  state = {
    code: "SELECT * FROM ORDERS",
    playButton: false,
    openFindModal: false,
    editorOutputStyles: {
      left: "110%",
    },
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
    if (this.state.playButton) {
      this.setState({
        playButton: false,
        editorOutputStyles: {
          left: "110%",
        },
      });
    } else {
      this.setState({
        playButton: true,
        editorOutputStyles: {
          left: "0%",
        },
      });
    }
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
              <div
                className={styles.play__btn__back}
                style={{
                  backgroundColor: this.state.playButton
                    ? "#c72c41"
                    : "#393e46",
                }}
              >
                {this.state.playButton ? (
                  <IoCloseCircleSharp
                    className={styles.close__btn}
                    onClick={this.runQuery}
                  />
                ) : (
                  <GoPlay
                    className={styles.play__btn}
                    onClick={this.runQuery}
                  />
                )}
              </div>
            </div>

            <span className="text">
              <div
                className={`${styles.panel} ${styles.editor__output}`}
                style={this.state.editorOutputStyles}
              >
                {this.state.playButton && this.getCurrentCode() !== "" ? (
                  <Table />
                ) : (
                  "Execute a query first."
                )}
              </div>
            </span>
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
