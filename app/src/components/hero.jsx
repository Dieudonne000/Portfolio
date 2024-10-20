/* eslint-disable react/no-unescaped-entities */
import './main.css'
import arrows from '/public/Arrows.svg'
import arc from '/public/arc.svg'
import tri from '/public/triangle.svg'
import crs from '/public/cross.svg'

function Hero() {
    return (
        <div className='container'>
            <img src={arrows} alt="background-shape" className='item arrows' />
            <img src={arc} alt="background-shape" className='item arc' />
            <h1 className='item hero'>
            Hi.I'm Dieudonne.<br></br>
            A Web developer 
            </h1>
            <img src={crs} alt="background-shape" className='item crs' />
            <img src={tri} alt="background-shape" className='item tri' />
            <p className='item sub'>Hi I'm Passionate about creating outstanding webapps</p>
        </div>
    )
}

export default Hero