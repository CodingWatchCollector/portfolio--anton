const RandomFactRadio = ({
  radioName,
  variantValue,
  handleRadioChange,
  iconWidth = 32,
  iconHeight = 32
}) => {
  return (
    <div className='fact-radio-container'>
      <input
        type='radio'
        name={radioName}
        id={`fact-${variantValue}`}
        className={`fact-radio--${variantValue}`}
        onChange={handleRadioChange}
        value={variantValue}
      ></input>
      <svg width={iconWidth} height={iconHeight} aria-hidden='true'>
        <use
          width={iconWidth}
          height={iconHeight}
          href={`/svg/icons.svg#${variantValue}`}
        ></use>
      </svg>
    </div>
  )
}

export default RandomFactRadio
