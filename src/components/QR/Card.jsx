import './styles.css'
import qrImage from "../../assets/images/image-qr-code.png";

export const CardTitle = ({ title }) => {
    return <p className='card-title'>
        {title}
    </p>
}

export const CardTextContainer = ({ children }) => {
    return <div className='card-text-container'>
        {children}
    </div>
}
export const CardText = ({ text }) => {
    return <p className='card-text'>
        {text}
    </p>
}

export const CardImage = () => {
    return <img
        className='card-image'
        src={qrImage}
        alt="qr-image"
    />
}

export const Card = ({ children }) => {
    return <div className='card'>
        {children}
    </div>
}