import React from 'react';
//style
import styles from './_backgroundlayout.module.scss';

const BackgroundLayout = () => {
    const onClickHandler = (e) => {
        console.log(e);
    };
    return (
        <div onMouseDown={onClickHandler} className={styles.defaultBackgroundLayout} />
    );
};

export default BackgroundLayout;