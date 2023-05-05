import React from "react";
import cs from './Message.module.css'
import { reduxForm, Field } from 'redux-form'
import { required } from '../../../utilits/Validators/Validators.js';
import { Textarea } from '../../common/FormController/FormController.js';
import Waiter from '../../common/Waiter/Waiter';

const MessageForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={cs.messageTools}>
        <div>
            <Field name="newMessage" component={Textarea} className={cs.messageTextarea} type="text" validate={[required]} />
        </div>
        <div>
            <button className={cs.sentButton}><img src="https://www.shareicon.net/data/512x512/2016/06/16/595384_sent_512x512.png" alt="" /></button>
        </div>
    </form>
}

const MessageReduxForm = reduxForm({ form: 'newDialogMessage' })(MessageForm)



const Message = (props) => {
    let messageElement = props.messages.map(message => <div key={message.id} className={cs.content}><div  className={props.userId===message.userId?cs.myMessage:cs.message}>{message.message}</div></div>);
    let sendMessage = (value) => {
        props.sendMessage(value.newMessage, props.userId)
    }

    if (!props.params.userId) return <div className={cs.Err}>Choose your friend from list<div><Waiter/></div></div>
    return (<div className={cs.container}>
        <div className={cs.messages}>
            {messageElement}
          
        </div> 
        <div>
        <MessageReduxForm onSubmit={sendMessage} />
        </div> 
    </div>

    );
}

export default Message;