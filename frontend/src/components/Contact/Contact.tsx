import { useState, useEffect, useRef } from "react"
import {motion} from 'framer-motion'

// hooks
import { send } from "@emailjs/browser"

// utill
import { get_svg_icons } from "../util/get_svg_icons"

type ContactProps = {
    contactFormBtnRef: React.RefObject<HTMLButtonElement | null>
}

// EMAIL API
const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID
const emailId = import.meta.env.VITE_EMAIL_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY




export default function Contact({ contactFormBtnRef }: ContactProps) {


    //hook init
    const [contactSuccess, toggleContactSuccess] = useState(false)
    const [errorText, setErrorText] = useState('')
    const [dummyEmail, setDummyEmail] = useState("")
    const [dummySubject, setDummySubject] = useState("")
    const [dummyBody, setDummyBody] = useState("")
    const errorTextRef = useRef<HTMLParagraphElement | null>(null)

    // error fade away
    useEffect(() => {
        if (!errorText) return
        if (errorText.length == 0) return

        // reset fade state if reused
        errorTextRef.current?.classList.remove("fade-out")

        const fadeTimeout = setTimeout(() => {
            errorTextRef.current?.classList.add("fade-out")
        }, 5000)

        const clearTimeoutId = setTimeout(() => {
            setErrorText("")
        }, 5500) // allow fade animation to finish

        return () => {
            clearTimeout(fadeTimeout)
            clearTimeout(clearTimeoutId)
        }
    }, [errorText])



    // SUBMIT //
    const handleFormSubmit = (e: React.SubmitEvent) => {
        e.preventDefault()

        if (!dummyEmail || !dummySubject || !dummyBody) {
            setErrorText('missing fields')
            return
        }

        const templateEmail = {
            name: dummyEmail,
            message: `${dummySubject} \n\n ${dummyBody}`,
        }
        send(
            serviceId,
            emailId,
            templateEmail,
            { publicKey: publicKey },
        )
            .then(
                () => {
                    toggleContactSuccess(true)
                },
                (error) => {
                    setErrorText(error.text)
                },
            );


    }


    return (
        <>
            <h1 className="contact-header"> Contact </h1>
            <form className="contact-container" onSubmit={handleFormSubmit}>
                {contactSuccess == false ? (
                    <>
                        <div className='input-container'>
                            <h1> Email : </h1>
                            <input
                                value={dummyEmail}
                                className="input-styles"
                                onChange={(e) => { setDummyEmail(e.target.value) }}
                            />
                            <h1> Subject : </h1>
                            <input
                                value={dummySubject}
                                id='subject'
                                className="input-styles"
                                onChange={(e) => { setDummySubject(e.target.value) }}
                            />
                            <h1> Body : </h1>
                            <textarea
                                value={dummyBody}
                                className="input-styles"
                                onChange={(e) => { setDummyBody(e.target.value) }}
                            />
                            {/* Error Text */}
                            <p
                                className='error-text'
                                ref={errorTextRef}
                            >
                                {errorText}
                            </p>
                        </div>

                        <motion.button
                        ref={contactFormBtnRef}
                        type="submit"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 18,
                        }}
                        >
                        <p>Send</p>
                        {get_svg_icons({ icon: "send", size: 24 })}
                        </motion.button>

                    </>
                ) : (
                    <div className='form-success-container'>
                        {get_svg_icons({icon : 'check', size : 60})}
                        <p> Email Sent Successfully! </p>
                    </div>
                )}

            </form>
        </>



    )


}