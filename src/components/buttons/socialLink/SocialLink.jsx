import React from "react";
import styles from "./SocialLink.module.css";

const SocialLink = ({ social, href, imgSrc, name }) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			aria-label={social}
			className={styles.box}>
			<div className={styles.boxIconSocial}>
				<img
					src={imgSrc}
					alt={name}
				/>
			</div>
			<div className={styles.boxName}>
				<p>{name}</p>
			</div>
		</a>
	);
};

export default SocialLink;
