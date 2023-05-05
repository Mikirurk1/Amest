import React from 'react';

export const required = (value)=> {
    if (value) return undefined;
    return <span>Field is required</span>
}

export const MaxLength =(maxLength)=>(value)=>{
    if (value.length>maxLength) return `Maximum simbols is ${maxLength}`;
    return undefined
}
export const MinLength =(minLength)=>(value)=>{
    if (value.length<minLength) return `Miximum simbols is ${minLength}`;
    return undefined
}