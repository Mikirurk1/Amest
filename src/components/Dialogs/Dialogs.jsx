import React from "react";
import cs from './Dialogs.module.css';
import Dialog from './Dialog/DialogItem';
import Message from "./Message/Message";


const Dialogs = (props) => {

    return (
        <div className={cs.dialogs}>
            <div className={cs.dialogBlock}>
                <Dialog dialogs={props.dialogs} />
            </div>
            <div className={cs.messageBlock}>
                <Message messages={props.messages} sendMessage={props.sendMessage} params={props.params} userId={props.userId} />

            </div>
        </div>
    );
}

export default Dialogs;