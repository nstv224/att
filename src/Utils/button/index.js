import React from "react";
import styles from "./index.module.css";

export default function Button(props) {
	const { text, Icon, textSize, className, style, onClick } = props;
	return (
		<div
			className={`${styles.btn} ${className}`}
			onClick={onClick}
			style={style}
		>
			<p className={textSize}>{text}</p>
			<Icon className={styles.btn__icon} />
		</div>
	);
}
