import React from 'react';
//style
import styles from './_draweritem.module.scss';

const DrawerItem = ({children,className}) => {
    return (
        <div className={`${styles.defaultDrawerItemStyle} ${className}`}>
            {children}
        </div>
    );
};

export default DrawerItem;
