import React from 'react'
import style from './FormControls.module.css'

// export const Textarea = (props) => {
//     const {input, meta} = props
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={style.formControl+' '+ (hasError? style.error : "")}>
//            <div> 
//                <textarea {...input} />
//            </div>
//            <div>
//               { hasError && <span>{meta.error}</span> }
//                </div>
//         </div>
//     )
// }

// export const Input = (props) => {
//     const {input, meta} = props
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={style.formControl+' '+ (hasError? style.error : "")}>
//            <div> 
//                <input {...input} />
//            </div>
//            <div>
//               { hasError && <span>{meta.error}</span> }
//                </div>
//         </div>
//     )
// }

const FormControl = props => {
    const { input, meta, child } = props
    const hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : "")}>
            <div>
                {props.children}
            </div>
                {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}