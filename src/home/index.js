import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { HiOutlineDatabase } from "react-icons/hi";
import { AiOutlineArrowRight, AiFillHeart } from "react-icons/ai";

export default class index extends Component {
	render() {
		return (
			<div className={styles.container}>
				<div className={`${styles.home__topbar} p-4 text-lg`}>
					<div className={styles.navbar__brand}>
						<HiOutlineDatabase className={styles.brand__icon} />
						<p className={`text-xl`}>SQL EDITOR</p>
					</div>
				</div>
				<div className={styles.hero}>
					<h1 className={styles.title}>
						Do <span className={styles.success}>Query</span> like never before.
					</h1>
					<p className={styles.text}>
						A small sql editor where you can do queries
						<br /> on sql tables effortlessly :)
					</p>
					<Link to="/sql-editor">
						<div className={styles.btn}>
							<p className={styles.btn__text}>Get started</p>
							<AiOutlineArrowRight className={styles.icon} />
						</div>
					</Link>
				</div>
				<div className={styles.product__container}>
					<Link to="/sql-editor">
						<img
							src={`${process.env.PUBLIC_URL}/sqlBanner.png`}
							alt="sql editor"
							className={styles.product}
						/>
					</Link>
				</div>

				<div className={styles.footer__container}>
					<p className={styles.footer}>
						Made with{" "}
						<span className={styles.warning}>
							<AiFillHeart />
						</span>
					</p>
				</div>
			</div>
		);
	}
}
