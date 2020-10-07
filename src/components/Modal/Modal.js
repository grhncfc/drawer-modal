import React, { useRef,  useImperativeHandle } from 'react';
//style
import styles from './_modal.module.scss';
//transitionGroup
import { CSSTransition } from 'react-transition-group';

const Modal = React.forwardRef((props, ref) => {
    const boxRef = useRef();
    useImperativeHandle(ref,()=>({
        "closeModal": (e) => {
            if(!boxRef.current.contains(e.target)){
              props.setIsOpen(false);
            }
        }
    }));
    const onClose = () => {
        props.setIsOpen(false);
        if(props.onClose){
            props.onClose();
        }
    };
    return (
        props.isOpen && (
                <div onClick={(e)=>ref.current.closeModal(e)} className={`${props.hasLayout ? styles.defaultBackgroundLayout : styles.defaultNonBackgroundLayout}`}>
                    <div ref={boxRef} className={`${props.className} ${styles.defaultModal}`}>
                        {props.children}
                        <button className={styles.closeButtonDefault} onClick={onClose}>Close</button>
                    </div>
                </div>)
    );
});

export default Modal;