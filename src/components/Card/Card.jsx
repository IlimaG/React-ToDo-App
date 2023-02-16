
import { useEffect, useState } from 'react'
import './Card.css'

const Card = ({ text, classname, date, priority, label }) => {

    const [colorText, setColorText] = useState('black')

    useEffect(() => {
        if (priority == 1) {
            setColorText('blue')
        } else if (priority == 2) {
            setColorText('green')
        } else if (priority == 3) {
            setColorText('red')
        } else {
            setColorText('black')
        }
    }, [priority])


    return (
        <div>
            <div>
                <h3 className={classname} style={{ color: colorText }}>{text}</h3>
            </div>

            <div>
                <p>#{label}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default Card