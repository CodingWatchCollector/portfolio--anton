import Image from 'next/image'
// TODO: change links, alt text, visible hidden info
// change info about project
//

import KanbanExample from '../public/kanban-example.jpg'

const KanbanProject = () => {
  return (
    <div className='kanban card grid gap'>
      <div className='polaroid-frame'>
        <div className='polaroid-frame--shadow-inside'></div>
        <div className='polaroid-frame--work-in-progress'>
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

        <div className='card__photo-wrapper'>
          <Image
            src={KanbanExample}
            className='card__photo'
            placeholder='blur'
            layout='intrinsic'
            alt='Kanban desk website example'
            objectFit='cover'
            objectPosition='left top'
          />
        </div>
        <h3 className='card__title'>Kanban desk website</h3>
      </div>
      <div className='card__description text-max-length flow-spacer spacer-xs'>
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
