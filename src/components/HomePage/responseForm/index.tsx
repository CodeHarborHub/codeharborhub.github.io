import React, { useState } from 'react'
import style from './response.module.css';

const ResponseForm = () => {
    const [inputData, setInputData] = useState({
        name: "",
        message: ""
    })

    const updateInputs = (e) => {
        setInputData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className={style.response_section}>
            <img src='https://img.freepik.com/free-vector/business-meeting-brainstorming-team-people-working-office-corporate-communication-men-women-sitting-negotiating-studying_575670-2062.jpg' className={style.response_img} />
            <div className={style.response_container}>
                <h2 style={{ textAlign: "center" }}>GET IN TOUCH</h2>
                <div className="">
                    <div className={style.response_input}>
                        <label htmlFor='name' className={style.response_heading}>Tell us your name
                        </label>
                        <input id="name"
                            name='name'
                            placeholder='Enter your name here'
                            value={inputData.name}
                            type="text" className={style.response_inpt} onChange={(e) => updateInputs(e)} />
                    </div>
                    <div className={style.response_input}>
                        <label htmlFor='message' className={style.response_heading}>Your message
                        </label>
                        <textarea name="message" className={style.response_inpt} id="message"
                            rows="3" cols="50"
                            name="message"
                            placeholder='Enter your message here'
                            value={inputData.message} onChange={(e) => updateInputs(e)}></textarea>
                    </div>
                </div>
                <button className={style.response_btn}>SUBMIT</button>
            </div>
        </div>
    )
}

export default ResponseForm;
