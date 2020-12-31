import React, {useState, useEffect} from "react";
import { useProjectsValue, useSelectedProjectValue } from "../context";
import {collatedTasks} from '../constants/index';
import {getCollatedTitle, getTitle, collatedTasksExist} from '../helpers';
import { useTasks } from "../hooks";
import { Checkbox } from "./Checkbox";
import { AddTask } from "./AddTask";

export const Tasks = () => {
  const {selectedProject} = useSelectedProjectValue();
  const {projects} = useProjectsValue();
  const {tasks} = useTasks(selectedProject);
  let projectName = "";
  
  if (projects.length > 0 && selectedProject && !collatedTasksExist(selectedProject) ) {
    projectName = getTitle(projects, selectedProject).name;
  }

  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name
  }

  useEffect(() => {
    document.title = `${projectName}: Todoist`
    })



  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>
      <ul className="tasks__list">
        {tasks.map((task) => (
          <li key={task.id}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
      <AddTask/>
    </div>
  );
};
