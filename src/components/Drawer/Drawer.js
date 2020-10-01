import React, {useState} from 'react';
//style
import styles from './_drawer.module.scss';

const Drawer = (props) => {
    const [isOpen,setIsOpen] = useState(false);
    const drawerHandler = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={`${styles.defaultDrawer} ${styles.left} ${isOpen ? styles.defaultDrawerActive : ''} ${props.className}`}>
            <div onClick={drawerHandler} className={`${styles.burgerIcon} ${props.iconClassName}`}>
                <div className={styles.line1}> </div>
                <div className={styles.line2}> </div>
                <div className={styles.line3}> </div>
            </div>
            <div className={`${styles.defaultDrawerItemsStyle} ${props.drawerItemsStyle}`}>
                {isOpen && props.children}
            </div>
        </div>
    );
};

export default Drawer;