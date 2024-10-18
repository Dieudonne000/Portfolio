/* eslint-disable react/no-unescaped-entities */
import './main.css'
import me from '/Moi.jpg'

function About() {
    return (
        <div className='about'>
            <h1 className='Ac'>About me</h1>
            <div className="content">
                    <img src={me} alt="my pic" className='pic' />
                    <p>I'm Dieudonne, a frontend designer passionate about creating clean, user-friendly interfaces.<br></br>
                        My main focus is on crafting responsive and visually appealing web experiences.<br></br>
                        While my expertise lies in frontend development, I also work on backend projects, ensuring seamless integration and functionality.<br></br>
                        I'm always excited to take on new challenges and continue growing in the world of web development.<br></br>
                    </p>
            </div>
        </div>
    )
}

export default About