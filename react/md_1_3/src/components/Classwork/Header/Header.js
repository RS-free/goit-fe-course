import React from 'react';
import injectSheet from 'react-jss';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const cx = classnames.bind(styles);

const inline = {
  logo: {
    backgroundColor: 'orange',
    paddind: 20,
    fontSize: 40,
  },
};

// -1l
// const Header = () => (
//     <header className={styles.header}>
//         <span style={inline}>Logo</span>
//     </header>
// );

// ||-2

// const Header = props => (
//     <header className={styles.header}>
//         <span style={props.logoTitle}>Logo</span>
//     </header>
// );

// ||-3

// const Header = ({classes, logoTitle, logged}) => {
//     const cls = [styles.header];
//     if (logged) cls.push(styles.headerLogged);
//     console.log();

//     return (
//         <header className={cls.join(' ')}>
//             <span className={classes.logo}>{logoTitle}Logo</span>
//         </header>
//     );
// };

// ||

const Header = ({ classes, logoTitle, logged }) => {
  // const cls = [styles.header];
  // if (logged) cls.push(styles.headerLogged);
  // console.log('cls', cls);
  // className = {cls.join(' ')}

  return (
    <header className={cx('header', { headerLogged: logged })}>
      <span className={classes.logo}>{logoTitle}</span>
      {/* <span className={`${classes.logo} ${logged ? 'logged': ''}`}>{logoTitle}</span> */}
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.shape.isRequired,
  logoTitle: PropTypes.string.isRequired,
  logged: PropTypes.bool,
};

Header.defaultProps = {
  logged: false,
};

const StyledHeader = (() => injectSheet(inline)(Header))();
// const StyledHeader = () => styledElement()

export default StyledHeader;
