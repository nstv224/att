import React, { Component } from "react";
import styles from "./index.module.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowDropDownLine, RiArrowDropLeftLine } from "react-icons/ri";

const columns = ["name", "type", "created"];
const data = [
	{
		name: "ORDERS",
		type: "Table",
		created: "2 hour ago",
	},
];

const columns2 = ["column", "type", "length", "nullable"];
const data2 = [
	{
		column: "ORDERID",
		type: "NUMBER",
		length: "22",
		nullable: "Yes",
	},
	{
		column: "CUSTOMERID",
		type: "NUMBER",
		length: "22",
		nullable: "Yes",
	},
	{
		column: "EMPLOYEEID",
		type: "NUMBER",
		length: "22",
		nullable: "No",
	},
];

export default class index extends Component {
	state = {
		activeSlide: 1,
		slideStyle: { slide1: { left: "0%" }, slide2: { left: "-100%" } },
	};

	toggleOpenSchema = () => {
		console.log("Open Schema");
		this.setState({
			activeSlide: this.state.activeSlide === 1 ? 2 : 1,
		});
	};
	render() {
		const slideStyle =
			this.state.activeSlide === 1
				? {
						slide1: { left: "0%", opacity: 1 },
						slide2: { left: "-100%", opacity: 0 },
				  }
				: {
						slide1: { left: "-100%", opacity: 0 },
						slide2: { left: "0%", opacity: 1 },
				  };
		return (
			<Modal
				open={this.props.open}
				onClose={this.props.closeFindModal}
				closeIcon={<AiOutlineClose id="close__modal__icon" />}
				center
			>
				<div className={styles.modal}>
					<div className={styles.slide__1} style={slideStyle.slide1}>
						<div className={styles.modal__header}>
							<p>Table/View Finder</p>
						</div>
						<div className={styles.body}>
							<div className={styles.schema__info}>
								<input
									className={styles.search}
									placeholder="&#128269; Search table"
									tabindex="-1"
									name="table-search"
								/>
								<div className={styles.dropdown__wrapper}>
									<p className={styles.dropdown__header}>Schema</p>
									<div className={styles.dropdown}>
										<p className={styles.dropdown__title}>ORDERS</p>
										<RiArrowDropDownLine className={styles.dropdown__icon} />
									</div>
								</div>
							</div>
							<div className={styles.schema__table__container}>
								<table className={styles.schema__table}>
									<tr className={styles.row}>
										{columns.map((column) => (
											<th
												className={`  ${styles.row__cell} ${styles.header}`}
											>
												<p className={``}>{column.toUpperCase()}</p>
											</th>
										))}
									</tr>
									{data.map((row) => (
										<tr className={styles.row}>
											{columns.map((col, i) => (
												<td
													className={`${styles.cell} ${styles.row__cell}`}
												>
													<p
														className={
															i === 0
																? `${styles.success} ${styles.pointer}`
																: ""
														}
														style={{
															zIndex: "101",
														}}
														onClick={
															i === 0 ? this.toggleOpenSchema : null
														}
													>
														{row[col]}
													</p>
												</td>
											))}
										</tr>
									))}
								</table>
							</div>
						</div>
					</div>
					<div className={styles.slide__2} style={slideStyle.slide2}>
						<div className={styles.modal__header}>
							<p>Table/View Finder</p>
						</div>
						<p className={styles.tableName}>
							Table <span className={styles.success}>ORDERS</span>
						</p>
						<div className={styles.slide2__body}>
							<div className={styles.schema__table2__container}>
								<table className={styles.schema__table}>
									<tr className={styles.row}>
										{columns2.map((column) => (
											<th
												className={`  ${styles.row__cell} ${styles.header}`}
												key={column}
											>
												<p className={``}>{column.toUpperCase()}</p>
											</th>
										))}
									</tr>
									{data2.map((row) => (
										<tr className={styles.row} key={row}>
											{columns2.map((col, i) => (
												<td
													className={`${styles.cell} ${styles.row__cell}`}
												>
													<p
														className={i === 0 ? styles.success : ""}
														style={
															i === 0
																? {
																		cursor: "pointer",
																  }
																: null
														}
													>
														{row[col]}
													</p>
												</td>
											))}
										</tr>
									))}
								</table>
							</div>
							<div className={styles.footer}>
								<div className={styles.back} onClick={this.toggleOpenSchema}>
									<RiArrowDropLeftLine className={styles.back__icon} />
									<p>All Objects</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		);
	}
}
