import React, { useState, useEffect } from 'react'
import { firebase } from '../firebase';

const collatedTasksExists = () => {};

export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        let unsubscribe = firebase.firestore.collection('tasks').where('userId', '==', 'U1dwd4b3Z1Wdnl7vzmb5');
        unsubscribe = selectedProject && !collatedTasksExists(selectedProject)
        ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject)) : selectedProject === 'TODAY' ? (unsubscribe =unsubscribe.where('date', '==', moment().format('DD/MM/YY')))
        :selectedProject === 'INBOX' || selectedProject === 0 ? (unsubscribe = unsubscribe.where('date', '==', '')) : unsubscribe
        return () => { }
    }, [selectedProject] )
}



