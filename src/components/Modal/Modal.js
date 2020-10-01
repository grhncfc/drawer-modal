import React, {useRef, useState} from 'react';
//style
import styles from './_modal.module.scss';

const Modal = (props) => {
    const [isOpen,setIsOpen] = useState(false);
    const boxRef = useRef() ;
    const openModalHandler = (e) => {
        if (boxRef.current.contains(e.target)){
            return ;
        }else {
            console.log("elma");
            setIsOpen(false);
        }
    };
    const closeModalHandler = () => {
        setIsOpen(false);
    }
    return (
        <div>
            {!isOpen ? (
            <button onClick={()=>setIsOpen(true)} className={styles.btnDefault}>Open Model</button>):(
            <div onClick={openModalHandler} className={styles.defaultBackgroundLayout}>
                <div ref={boxRef} className={styles.defaultModal}>
                    {props.children}
                    <button className={styles.closeButtonDefault} onClick={closeModalHandler}>Close</button>
                </div>
            </div>
            )}
        </div>
    );
};

export default Modal;