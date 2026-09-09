import { useTranslation } from 'react-i18next'
import CVEng from '../../assets/DanoZaganjorCVeng.pdf'
import CVSve from '../../assets/DanoZaganjorCVsve.pdf'

const CTA = () => {
  const { i18n, t } = useTranslation()
  const CV = i18n.language.startsWith('sv') ? CVSve : CVEng

  return (
    <div className="call_to_action">
      <a href={CV} download="DanoZaganjor_CV" className="btn">
        {t('ctaDownload')}
      </a>
      <a href="#contact" className="btn btn-primary">
        {t('ctaTalk')}
      </a>
    </div>
  )
}

export default CTA
