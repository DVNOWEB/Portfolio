import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', lang: 'EN' },
  { code: 'sv', lang: 'SV' },
]

export default function LangSelector() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="btn_container">
      {languages.filter((lng) => lng.code !== i18n.language)
        .map((lng) => (
          <button
            type="button"
            className="lng_button"
            key={lng.code}
            aria-label={`Switch language to ${lng.lang}`}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
      ))}
    </div>
  )
}
