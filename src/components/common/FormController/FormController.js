import React from 'react';
import css from './FormController.module.css'

export const Textarea = ({ input, meta, ...props }) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? ( css.error) : ""}>
            <textarea  {...input}{...props} />
            <div>{hasError && <span className={css.spanError} >{meta.error}</span>}</div>

        </div>
    )
}
export const Input = ({ input, meta, ...props }) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? ( css.error) : ""}>
            <input  {...input}{...props} />
            <div>{hasError && <span className={css.spanError} >{meta.error}</span>}</div>

        </div>
    )
}