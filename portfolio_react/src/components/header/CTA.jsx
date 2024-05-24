import { useTranslation } from 'react-i18next';
import CVEng from '../../assets/DanoZaganjorCVeng.pdf';
import CVSve from '../../assets/DanoZaganjorCVsve.pdf';

const CTA = () => {
  const { i18n } = useTranslation();
  const CV = i18n.language.startsWith('sv') ? CVSve : CVEng;

  return (
    <div className="call_to_action">
      <a href={CV} download="DanoZaganjor_CV" className="btn">
        {i18n.language.startsWith('sv') ? 'Ladda ner mitt CV' : 'Check my resume'}
      </a>
      <a href="#contact" className="btn btn-primary">
        {i18n.language.startsWith('sv') ? 'Låt oss prata' : 'Let`s talk'}
      </a>
    </div>
  );
}

export default CTA;
