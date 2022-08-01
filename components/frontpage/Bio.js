const getMyAge = birthdayDate => {
  const ageDifferenceInMs = Date.now() - birthdayDate
  const ageDate = new Date(ageDifferenceInMs)
  const yearsBetween = Math.abs(ageDate.getUTCFullYear() - 1970)
  return yearsBetween
}

const myBirthday = new Date(1993, 4, 12)
const age = getMyAge(myBirthday)

const Bio = () => {
  return (
    <div className='bio content--max-width'>
      <h3 className='cursive'>Info/Contacts</h3>
      <p className='bio__name'>
        realName: <span className='cursive'> Anton Begunenko</span>
      </p>
      <p className='bio__age '>
        revolutionsAroundTheSun (aka years):{' '}
        <span className='cursive'>{age}</span>
      </p>
      <p className='bio__github'>
        myGithub:{' '}
        <a href='https://github.com/CodingWatchCollector'>
          {' '}
          CodingWatchCollector
        </a>
      </p>
      <p className='bio__email-me'>
        emailMe:{' '}
        <a href='mailto:a.d.begun@gmail.com?subject=Emploi%20en%20alternance&body=Bonjour,%20on%20est%20intéressé%20par%20votre%20profil!'>
          a.d.begun@gmail.com
        </a>
      </p>
      <p className='bio__linkedin'>
        socialAccount:{' '}
        <a href='https://www.linkedin.com/in/anton-begunenko'>linkedIn</a>
      </p>
    </div>
  )
}

export default Bio
