import { useTranslation } from 'react-i18next'

const CTA = () => {
  const { t } = useTranslation()

  return (
    <div className="call_to_action">
      <a href="#contact" className="btn btn-primary">
        {t('ctaTalk')}
      </a>
    </div>
  )
}

export default CTA
