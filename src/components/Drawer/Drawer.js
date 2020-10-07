import React,{ Fragment } from 'react';
//style
import styles from './_drawer.module.scss';
import { AiOutlineClose } from "react-icons/ai";

const Drawer = (props) => {
    const onClose = () => {
        props.setIsOpen(false);
        if (props.onClose){
            props.onClose();
        }
    }
    return (
        <Fragment>
            {props.isOpen && <div className={`${props.hasLayout ? styles.defaultBackgroundLayout : styles.defaultNonBackgroundLayout}`} />}
            <div className={`${styles.defaultDrawer} ${styles.left} ${props.isOpen ? styles.defaultDrawerActive : ''} ${props.className}`}>
                <AiOutlineClose onClick={onClose} className={styles.iconStyles} />
                {props.children}
            </div>
        </Fragment>
    );
};

export default Drawer;