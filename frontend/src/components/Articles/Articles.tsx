// hooks
import { get_svg_icons } from '../util/get_svg_icons'

export default function Articles() {

    return (
        <div className='articles-container'>

            <div className='header'>
                <p>My Articles</p> 
            </div>

            <div className='body'>
                {/* <div className='item'>
                        <div className="img-placeholder">
                            p
                        </div>
                        <h1> Title </h1>
                        <p className='date'> 10-10-1000</p>
                        <p className='sample'> 
                            Lorem ipsum dolor sit amet consectetur, <br/>
                            adipisicing elit. Molestiae quidem distinctio autem,
                        </p>

                </div> */}

                <div className='no-item'>
                    <div>
                        {get_svg_icons({icon : 'no-article', size : 41})}
                    </div> 
                    <p> Nothing here yet.</p>
                </div>


            </div>



        </div>


    )


}