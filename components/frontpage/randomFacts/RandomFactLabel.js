const RandomFactLabel = ({
  labelText,
  labelTextHidden = true,
  variantValue,
  currentValue,
  iconWidth = 32,
  iconHeight = 32
}) => {
  let className = `fact-label--${variantValue}`
  if (variantValue === currentValue) {
    className = className + ' active'
  }
  return (
    <label htmlFor={`fact-${variantValue}`} className={className}>
      <span className={labelTextHidden ? 'visually-hidden' : ''}>
        {labelText}
      </span>
      <svg
        width={iconWidth}
        height={iconHeight}
        className='planet'
        aria-hidden='true'
      >
        <use
          width={iconWidth}
          height={iconHeight}
          href={`/svg/icons.svg#${variantValue}`}
        ></use>
      </svg>
    </label>
  )
}

export default RandomFactLabel
