import React from "react";
import { NavLink } from "react-router-dom";

import cs from './DialogItem.module.css'

const DialogItem = (props) => {
    let dialogElement = props.dialogs.map(dialog => <nav key={dialog.id} className={cs.dialog}>
        <NavLink to={`/dialogs/${dialog.id}`} className={({ isActive }) => isActive ? `${cs.activeMessage}` :`${cs.a}` }>{dialog.name}</NavLink>
    </nav>);
    return (
        <div className={cs.dialogItem}>
            {dialogElement}
        </div>
    );
}

export default DialogItem;