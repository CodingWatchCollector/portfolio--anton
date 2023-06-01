import { Rentawilder } from './projects/Rentawilder'
import { Riverse } from './projects/Riverse'
import AbletonProject from './projects/Ableton-project'
import ChezMmanProject from './projects/ChezMman-project'

const Projects = () => {
  return (
    <article className='projects flow-spacer'>
      <div className='content--max-width'>
        <h2 className='text-highlight'>My projects/work</h2>
      </div>
      <div className='cards-wrapper flow-spacer spacer-xl'>
        <Riverse />
        <Rentawilder />
        <AbletonProject />
        <ChezMmanProject />
      </div>
    </article>
  )
}

export default Projects
