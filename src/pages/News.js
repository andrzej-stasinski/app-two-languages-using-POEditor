import React from 'react'
import {useTranslation} from 'react-i18next'

const styles = {
    container: {
        padding: '0 10px',
    },
    img: {
        width: '100%',
        textAlign: 'center',
    }
}

const News = () => {
    const { t } = useTranslation();
    return (
        <div style={styles.container} >
            <h2>{t('News')}</h2>
            <h4>
            {t('One, two, three, four, five')}
            </h4>
            <h4>
            {t('Once I caught a fish alive')}
            </h4>
            <h4>
            {t('Six, seven, eight, nine, ten')}
            </h4>
            <h4>
            {t('Then I let it go again')}
            </h4>
            <h4>
            {t('Why did you let it go?')}
            </h4>
            <h4>
            {t('Because it bit my finger so')}
            </h4>
            <h4>
            {t('Which finger did it bite?')}
            </h4>
            <h4>
            {t('This little finger on the right')}
            </h4>
        </div>
    )
}

export default News
