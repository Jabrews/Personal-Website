import {motion} from 'framer-motion'

type HeroProps = {
    appDivRef: React.RefObject<HTMLDivElement | null>
    contactFormBtnRef: React.RefObject<HTMLButtonElement | null>

}

// test


export default function Hero({ appDivRef, contactFormBtnRef }: HeroProps) {

    const handleContactBtnDwn = () => {
        const target = contactFormBtnRef.current
        if (!target) return

        const yOffset = -700// adjust 
        const y =
            target.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset

        window.scrollTo({
            top: y,
            behavior: "smooth",
        })
    }




    return (
        <div className='hero-container'>
            <div className="hero-left">

                <div className='hero-header'>
                    <div> p </div>
                    <h1> Welcome to <br /> My Website </h1>
                </div>
                {/* <p> blah blah blah blah blah <br /> blah blah</p> */}
                <p> My Name is Jacob, <br/> and this is where I'll store <br /> my work and more!</p>
                {appDivRef !== null ? (
                    <motion.button
                        onClick={handleContactBtnDwn}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 18,
                        }}
                    >
                        <p>Contact Me</p>
                    </motion.button>
                ) : (
                    <button disabled>
                        {/* INSERT LOADING SPINNER LATER*/}
                        insert loading spinner
                    </button>
                )
                }
            </div>

            <div className='hero-right'>
                <div className='img-placeholder'>
                </div>

            </div>


        </div>
    )


}