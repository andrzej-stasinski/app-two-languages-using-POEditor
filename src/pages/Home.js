import React from 'react'
import {useTranslation} from 'react-i18next'
import img from '../img/pol-eng.jpg'

const styles = {
    container: {
        padding: '0 10px',
    },
    img: {
        width: '100%',
        textAlign: 'center',
    }
}

const Home = () => {
    const { t } = useTranslation();
    return (
        // <div>
        <div style={styles.container} >
            <h2>{t('Home')}</h2>
            <h3>{t('Presentation of a bilingual website')}</h3>
            <img src={img} style={styles.img} />
        </div>
    )
}

export default Home
