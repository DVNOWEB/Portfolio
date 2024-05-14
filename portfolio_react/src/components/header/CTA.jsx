import CV from '../../assets/DanoZaganjorCVeng.pdf'

const CTA = () => {
  return (
    <div className="call_to_action">
      <a href={CV} download className="btn">
        Check my CV 
      </a>
      <a href="#contact" className="btn btn-primary">
        Let`s talk
      </a>
    </div>
  )
}

export default CTA