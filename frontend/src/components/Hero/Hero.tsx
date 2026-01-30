
type HeroProps = {
    appDivRef : React.RefObject<HTMLDivElement | null>
}


export default function Hero({appDivRef} : HeroProps) {

    return (
        <div className='hero-container'>
            <div className="hero-left">

                <div className='hero-header'>
                    <div> p </div>
                    <h1> Welcome to <br/> Website </h1>
                </div>
                <p> blah blah blah blah blah <br/> blah blah</p>
                {appDivRef !== null ? (
                    <button>
                        <p>
                            Contact Me
                        </p>
                    </button>
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
                    <p> yo </p>
                </div>

            </div>


        </div>    
    )


}