import '../style/footer.css';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const shop = useNavigate()
    return(
        <>
            <div className='footer'>
                <img src={require('../Assets/logo.png')} alt=''/>
                <h2>EcoLuxe</h2>
                <div className='list'>
                    <ul>
                        <li>Company</li>
                        <li onClick={()=>shop('/shop')}>Products</li>
                        <li>Offices</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='icons'>
                    <a target='_blank' href='https://www.instagram.com/heydhairyaa/'>
                        <img src={require('../Assets/instagram_icon.png')} alt='' />
                    </a>
                    <a className='linkedin_icon' target='_blank' href='https://www.linkedin.com/in/dhairya-jain-19281a231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                        <img src={require('../Assets/linkedin_icon.png')} alt=''/>
                    </a>
                    <a target='_blank' href='https://wa.me/8302871225?text=Hello%20how%20can%20I%20help%20you?'>
                        <img src={require('../Assets/whatsapp_icon.png')} alt='' />
                    </a>
                </div>
            
            </div>
        </>
    )
}

export default Footer;