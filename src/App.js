import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

import Form from "./Form";
import List from "./List";

const initialTodos = [
    {id: 1, title: "Read React Documentation ", done: false},
    {id: 2, title: "Learn Beautiful Drag And Drop", done: false},
    {id: 3, title: "Read Bootstrap Documentation ", done: false}
]

function App() {

    const [list, setList] = useState(initialTodos);

    const onCreate = title => {
        console.log(title)
        const newItem = {
            id: Math.random(),
            title: title,
            done: false
        }

        const updateList = [...list, newItem];
        setList(updateList)
    };

    const onTaskDelete = (id) => {
        const updatedList = list.filter(el => el.id !== id);
        setList(updatedList);
    }

    const   onTaskDoneToggle = (id) => {
        const updatedList = list.map(el => {
            if(el.id === id) return { ...el, done: !el.done}
            else return el;
        })
        setList(updatedList);
    };
    const onTaskSave = (task) => {
        const updatedTodos = list.map(el => {
            if (el.id === task.id) return { ...el, title: task.title };
            else return el;
        });

        setList(updatedTodos);
    };

    return (


        <div className="container">

            <Form onCreate={onCreate}/>
            <List list={list}
                  onTaskDelete={onTaskDelete}
                  onTaskDoneToggle={onTaskDoneToggle}
                  onTaskSave={onTaskSave}
            />


        </div>




    );
}

export default App;
