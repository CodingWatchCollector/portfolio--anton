import Image from 'next/image'
// TODO: change links, alt text, visible hidden info
// change info about project
//

import KanbanExample from '../../public/kanban-example.jpg'

const KanbanProject = () => {
  return (
    <div className='kanban card grid gap'>
      <div className='photo-and-button-wrapper'>
        <div className='card__photo-wrapper'>
          <div className='line-work-in-progress'>
            <div className='line-wrapper'>
              <div className='moving-text first' aria-hidden='true'>
                work in progress
              </div>
              <div className='moving-text second' aria-hidden='true'>
                work in progress
              </div>
              <div className='moving-text third' aria-hidden='true'>
                work in progress
              </div>
            </div>
          </div>
          <Image
            src={KanbanExample}
            className='card__photo'
            placeholder='blur'
            layout='responsive'
            alt='Kanban desk website example'
          />
        </div>
      </div>
      <div className='card__description flow-spacer spacer-xs'>
        <h3 className='card__title'>Kanban desk website</h3>
        <p>
          This is my current project - Kanban task management website - that
          will help me reinforce my JS and CSS knowledge, state management, use
          of local storage and/or databases, etc...
          <a
            className='link--block'
            href='https://www.frontendmentor.io/challenges/kanban-task-management-web-app-wgQLt-HlbB'
            target='_blank'
            rel='noreferrer'
          >
            Main inspiration source{' '}
            <span className='visually-hidden'>
              for my Kanban task management website
            </span>
          </a>
          <a
            className='link--block'
            href='https://github.com/CodingWatchCollector/kanban-task-manager'
            target='_blank'
            rel='noreferrer'
          >
            View current progress
            <span className='visually-hidden'>
              of my Kanban task management website
            </span>
          </a>
        </p>
      </div>
    </div>
  )
}

export default KanbanProject
