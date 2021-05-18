import React from "react";
import styles from "./index.module.css";

export default function index(props) {
	const { onClick } = props;
	return (
		<div className={styles.container} onClick={onClick}>
			<div
				className={`${styles.medium__line} ${styles.line}`}
			></div>
			<div className={`${styles.large__line} ${styles.line}`}></div>
			<div className={`${styles.small__line} ${styles.line}`}></div>
		</div>
	);
}
