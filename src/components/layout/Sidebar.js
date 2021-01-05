import React, { useState } from "react";
import {
  FaInbox,
  FaChevronDown,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";
import { useSelectedProjectValue } from "../../context";
import { AddProject } from "../AddProject";
import { Projects } from "../Projects";

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState('inbox');
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li data-testid="inbox" className={active === 'inbox' ? 'active' : undefined} >
          <div aria-label="Show Inbox Tasks" onClick={() => { setActive('inbox'); setSelectedProject('INBOX'); }} onKeyDown={() => { setActive('inbox'); setSelectedProject('INBOX'); }} tabIndex={0} role="button">
            <span >
              <FaInbox />
            </span>
            <span>Inbox</span>
          </div>

        </li>
        <li data-testid="today" className={active === 'today' ? 'active' : undefined} >
          <div aria-label="Show Todays Task" onClick={() => { setActive('today'); setSelectedProject('TODAY'); }} onKeyDown={() => { setActive('today'); setSelectedProject('TODAY'); }} tabIndex={0} role="button">


            <span>
              <FaRegCalendar />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li data-testid="next_7" className={active === 'next_7' ? 'active' : undefined}  >
          <div aria-label="Show Tasks for the next 7 days" onClick={() => { setActive('next_7'); setSelectedProject('NEXT_7'); }} onKeyDown={() => { setActive('next_7'); setSelectedProject('NEXT_7'); }} tabIndex={0} role="button">

            <span>
              <FaRegCalendarAlt />
            </span>
            <span>Next 7 days</span>
          </div>
        </li>


      </ul>
      <div className="sidebar__middle" aria-label="Show Hide Projects" onClick={() => setShowProjects(!showProjects)} onKeyDown={() => setShowProjects(!showProjects)} tabIndex={0} role="button">
        <span>
          <FaChevronDown className={() => setSelectedProject(!showProjects)} /> <h2>Projects</h2>
        </span>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />} </ul>
      {showProjects && <AddProject />}

    </div>
  );
};
