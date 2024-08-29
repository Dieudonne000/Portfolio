import './nav.css'
import me from '/public/Moi.jpg'

function About() {
    return (
        <div className='about'>
            <h1 className='Ac'>About me</h1>
            <img src={me} alt="my pic" className='pic' />
        </div>
    )
}

export default About