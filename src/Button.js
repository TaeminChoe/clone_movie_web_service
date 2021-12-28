import propTypes from 'prop-types';
import styles from './Button.module.css';

Button.propTypes = {
	text: propTypes.string.isRequired,
};

export default function Button({ text }) {
	return <button className={styles.btn}>{text}</button>;
}
