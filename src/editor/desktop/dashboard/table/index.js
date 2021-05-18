import React, { Component } from "react";
import styles from "./index.module.css";
import data from "./orders.json";
import { MdAttachment } from "react-icons/md";
import { CSVLink } from "react-csv";

const columns = Object.keys(data[0]);
const headers = columns.map((col) => {
  return {
    label: col,
    key: col,
  };
});

const csvReport = {
  data: data,
  headers: headers,
  filename: "data.csv",
};

export default class index extends Component {
  render() {
    return (
      <div className={styles.table__wrapper}>
        <table className={styles.table}>
          {
            <tr className={styles.row}>
              {columns.map((column) => (
                <th className={`  ${styles.row__cell} ${styles.header}`}>
                  <p className={`${styles.success}`}>{column.toUpperCase()}</p>
                </th>
              ))}
            </tr>
          }
          {data.map((row) => (
            <tr className={styles.row}>
              {columns.map((col) => (
                <td className={`${styles.cell} ${styles.row__cell}`}>
                  <p>{row[col]}</p>
                </td>
              ))}
            </tr>
          ))}
        </table>
        <CSVLink {...csvReport}>
          <span className={`${styles.download}`}>
            <MdAttachment className={`${styles.icon} ${styles.success}`} />
            <span className={` ${styles.success} ${styles.link}`}>
              Download CSV
            </span>
          </span>
        </CSVLink>
      </div>
    );
  }
}
