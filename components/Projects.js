import AbletonProject from './projects/Ableton-project'
import ChezMmanProject from './projects/ChezMman-project'
import KanbanProject from './projects/Kanban-project'

const Projects = () => {
  return (
    <article className='projects flow-spacer'>
      <div className='content--max-width'>
        <h2 className='text-highlight'>My projects/work</h2>
      </div>
      <div className='cards-wrapper flow-spacer spacer-xl'>
        <AbletonProject />
        <ChezMmanProject />
        <KanbanProject />
      </div>
    </article>
  )
}

export default Projects
