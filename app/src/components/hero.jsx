/* eslint-disable react/no-unescaped-entities */
import './nav.css'
import arrows from '/public/Arrows.svg'
import arc from '/public/arc.svg'

function Hero() {
    return (
        <div className='Hero'>
            <img src={arrows} alt="background-shape" className='arrows' />
            <h1>
            Hi.I'm Dieudonne.<br></br>
            A Web developer 
            </h1>
            <img src={arc} alt="background-shape" className='arc' />
            <p>Hi I'm Passionate about creating outstanding webapps</p>
        </div>
    )
}

export default Hero