import React from 'react'
import styles from "./popup.module.css"
const Popup=({status,message})=>{
    return(
        <div className={styles.popup_message}>
        <p className={message==="Success"?styles.success:styles.error}><span className={styles.span}>{status}</span>{message}</p>
        </div>
    )
}
export default Popup