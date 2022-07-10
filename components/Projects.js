import AbletonProject from './Ableton-project'
import ChezMmanProject from './ChezMman-project'
import KanbanProject from './Kanban-project'

const Projects = () => {
  return (
    <article className='projects flow-spacer'>
      <h2 className='text-highlight-border'>My projects/work</h2>
      <div className='cards-wrapper flow-spacer'>
        <AbletonProject />
        <ChezMmanProject />
        <KanbanProject />
      </div>
    </article>
  )
}

export default Projects
