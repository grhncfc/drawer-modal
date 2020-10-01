import React, {useRef, useState} from 'react';
//style
import styles from './_app.module.scss';
//components
import Modal from "./components/Modal/Modal";
import Drawer from "./components/Drawer/Drawer";
//icons
import { BsEnvelopeFill } from "react-icons/bs";
import { BsForwardFill } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsPlusSquareFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";
import { BsExclamationOctagonFill } from "react-icons/bs";
import { BsDiamondFill } from "react-icons/bs";
function App() {

    return (
    <div>
        <Drawer onClick={(e)=>console.log(e)}>
            <div className={styles.title}>
                Mail
                <div>
                    gurhan@gmail.com
                </div>
            </div>
            <div className={styles.iconButons}>
                <BsEnvelopeFill />
                <div>Inbox</div>
            </div>
            <div className={styles.iconButons}>
                <BsForwardFill/>
                <div>Outbox</div>
            </div>
            <div className={styles.iconButons}>
                <BsHeartFill/>
                <div>Favorites</div>
            </div>
            <div className={styles.iconButons}>
                <BsPlusSquareFill/>
                <div>Archieve</div>
            </div>
            <div className={styles.iconButons}>
                <BsTrashFill/>
                <div>Trash</div>
            </div>
            <div className={styles.iconButons}>
                <BsExclamationOctagonFill/>
                <div>Spam</div>
            </div>
            <div className={styles.label}>Labels</div>
            <div className={styles.iconButons}>
                <BsDiamondFill />
                <div>Family</div>
            </div>
            <div className={styles.iconButons}>
                <BsDiamondFill />
                <div>Friends</div>
            </div>
            <div className={styles.iconButons}>
                <BsDiamondFill />
                <div>Works</div>
            </div>
        </Drawer>
        <Modal/>
    </div>
  );
}

export default App;
