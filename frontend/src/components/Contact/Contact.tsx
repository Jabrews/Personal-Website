// hooks
import { useSvgIcons } from "../hooks/useSvgIcons"

export default function Contact() {

    return (
        <>
        <h1 className="contact-header"> Contact </h1>
        <div className='contact-container'>
                <div className='input-container'>
                    <h1> Email : </h1>
                    <input value='your email' className="input-styles"/>
                    <h1> Subject : </h1>
                    <input value='subject' id='subject' className="input-styles"/>
                    <h1> Body : </h1>
                    <textarea value='body' className="input-styles"/>
                </div>

                <button>
                    <p> Send </p>
                    {useSvgIcons({icon : 'send', size : 24})}    
                </button>

            </div>

        </>        

       

    )


}