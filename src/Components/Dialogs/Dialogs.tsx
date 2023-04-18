import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";



// const Dialog = ({name, id}: DialogParams) => {
//     return (
//         <div className={s.dialog + ' ' + s.active}>
//             <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
//         </div>
//     )
// }
//
//
//
// const Message = ({message, id}: MessageParams) => {
//     return (
//         <div className={s.dialog}>{message}</div>
//     )
// }
//
// let dialogElements = dialogData.map((dialog: {id: number, name: string}) => {
//     return <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>
// })
//
// let messageElements = messageData.map((message: {id: number, message: string}) => {
//     return <Message message={message.message} id={message.id} key={message.id}/>
// })

const Dialogs = (props: {
    dialogData: ({ id: number, name: string })[]
}) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/*{dialogElements}*/}
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    {/*{messageElements}*/}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;