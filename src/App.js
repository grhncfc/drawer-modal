import React, {useRef, useState } from 'react';
//style
import styles from './_app.module.scss';
//components
import Modal from "./components/Modal/Modal";
import Drawer from "./components/Drawer/Drawer";
import DrawerItem from "./components/DrawerItem/DrawerItem";
//icons
import { BsEnvelopeFill } from "react-icons/bs";
import { BsForwardFill } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsPlusSquareFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";
import { BsExclamationOctagonFill } from "react-icons/bs";
import { BsDiamondFill } from "react-icons/bs";
import { BsJustify } from "react-icons/bs";
function App() {
    const [isDrawerOpen,setIsDrawerOpen] = useState(false);
    const [isModalOpen,setIsModalOpen] = useState(false);
    const modalRef = useRef();
    const onOpen = () => {
        setIsDrawerOpen(true);
    };
    return (
    <div>
        <Drawer hasLayout isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} >
            <div className={styles.title}>
                Mail
                <div>
                    gurhan@gmail.com
                </div>
            </div>
            <DrawerItem>
                <BsEnvelopeFill />
                <div>Inbox</div>
            </DrawerItem>
            <DrawerItem>
                <BsForwardFill/>
                <div>Outbox</div>
            </DrawerItem>
            <DrawerItem>
                <BsHeartFill/>
                <div>Favorites</div>
            </DrawerItem>
            <DrawerItem>
                <BsPlusSquareFill/>
                <div>Archieve</div>
            </DrawerItem>
            <DrawerItem>
                <BsTrashFill/>
                <div>Trash</div>
            </DrawerItem>
            <DrawerItem>
                <BsExclamationOctagonFill/>
                <div>Spam</div>
            </DrawerItem>
            <div className={styles.label}>Labels</div>
            <DrawerItem>
                <BsDiamondFill />
                <div>Family</div>
            </DrawerItem>
            <DrawerItem>
                <BsDiamondFill />
                <div>Friends</div>
            </DrawerItem>
            <DrawerItem>
                <BsDiamondFill />
                <div>Works</div>
            </DrawerItem>
        </Drawer>
        <Modal hasLayout isOpen={isModalOpen} setIsOpen={setIsModalOpen} ref={modalRef} />
        {!isDrawerOpen && <BsJustify className={styles.openIconStyle} onClick={onOpen}/>}
        <button onClick={()=>setIsModalOpen(true)} className={styles.modalOpenButton}>Modal Opener</button>
    </div>
  );
}

export default App;
