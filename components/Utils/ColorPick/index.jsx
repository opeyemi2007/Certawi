import styles from "./colorPick.module.scss";

import React from "react";

const colorPick = (props) => {
	return (
		<div className={styles.colorPick}>
			<div
				className={styles.big}
				style={{ backgroundColor: `${props.bigColor}` }}
				onClick={() => {
					props.setState((prev) => {
						return {
							...prev,
							color: {
								primary: props.bigColor,
								secondary: props.smallColorLeft,
								accent: props.smallColorRight,
							},
						};
					});
				}}
			>
				<div
					className={styles.small}
					style={{ backgroundColor: `${props.smallColorLeft}` }}
				></div>
				<div
					className={styles.small}
					style={{ backgroundColor: `${props.smallColorRight}` }}
				></div>
			</div>
		</div>
	);
};

export default colorPick;
