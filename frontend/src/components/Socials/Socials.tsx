// imgs 
import GitImg from '../../assets/github.png'
import ytImg from '../../assets/youtube.png'
import itchIO from '../../assets/itchio.png'



export default function Socials() {


    const handleClick = (linkUrl : string) => {
        window.open(linkUrl, "_blank", "noopener,noreferrer")
    }

    return (
        <div className='socials-container'>
            <h1> Other Socials : </h1>
            <div className='item' onClick={() => {handleClick('https://github.com/Jabrews')}}>
                <img src={GitImg} />
                <p> Jabrews </p>
            </div>
            <div className='item' onClick={() => {handleClick('https://jabrews.itch.io/')}}>
                <img src={itchIO} />
                <p> jabrews </p>
            </div>
            <div className='item' onClick={() => {handleClick('https://www.youtube.com/channel/UCJTxfdu1FRpJeKnMywq4xxw')}}>
                <img src={ytImg} />
                <p> CompileClub </p>
            </div>



        </div>


    )



}