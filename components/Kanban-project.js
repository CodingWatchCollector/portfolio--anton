import Image from 'next/image'
// TODO: change links, alt text, visible hidden info
// change info about project
//

import KanbanExample from '../public/kanban-example.jpg'

const KanbanProject = () => {
  return (
    <div className='kanban card grid grid--3-col gap'>
      <div className='polaroid-frame grid--span-2'>
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
            layout='fill'
            alt='Kanban desk website example'
          />
        </div>
        <h3 className='card__title'>
          <span className='visually-hidden'>My current project: </span>
          Kanban desk website
        </h3>
      </div>
      <div className='card__description flow-spacer'>
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
            href='https://ableton-about-page.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            View current progress
            <span className='visually-hidden'>of Kanban desk website</span>
          </a>
        </p>
        {/* <details className='flow-spacer spacer-xs'> */}
        {/* <summary className='button-style'>
            Details
            <span className='visually-hidden'>on Ableton project</span>
          </summary>
          <div className='expandable flow-spacer spacer-xs'>
            <ul className='expandable__list'>
              <h4>Main reasons to copy this page:</h4>
              <li>Solidify my CSS Grid knowledge</li>
              <li>Build a complex page using WCAG recommendations</li>
              <li>I like the design and I wanted to recreate it</li>
            </ul>
            <ul className='expandable__list'>
              <h4>My personal touch and some fixes of the original page:</h4>
              <li>
                Fix heading hierarchy of the original page where every section
                has a H1(what?!)
              </li>
              <li>
                Skip to content button (10+ tabs before you skip the navigation
                links)
              </li>
              <li>
                Hover state on links (doesn&apos;t exist on original page)
              </li>
              <li>Added alt text to images</li>
              <li>Bumped up the outline on focus</li>
            </ul>
          </div> */}
        {/* </details> */}
      </div>
    </div>
  )
}

export default KanbanProject
