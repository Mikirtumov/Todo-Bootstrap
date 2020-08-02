import React, { useState } from 'react';
import { GiCrossMark } from "react-icons/gi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BsPencil } from "react-icons/bs";


function List(props) {

    const [taskEdit, setTaskEdit] = useState({});

    const editMode = (task) => {
        setTaskEdit(task);
    };

    const onEditTaskChange = (e) => {
        setTaskEdit({ ...taskEdit, title: e.target.value });
    };

    const taskSave = () => {
        props.onTaskSave(taskEdit);
        setTaskEdit({});
    }


    return (
        <div>
            {
            props.list.map(el =>
                <li className="list-group-item"  key={el.id}>

                    {
                        taskEdit.id === el.id
                            ? <>
                                <input  type="text" value={taskEdit.title} onChange={onEditTaskChange} />
                                <button className="btn btn-outline-secondary btn-sm ml-2"
                                        type="button"
                                        onClick={taskSave}

                                        disabled={!taskEdit.title.trim()}>Save</button>
                            </>
                            : <span
                                onClick={() => editMode(el)}>
                            {el.done ?  <del>{el.title}</del> : <span>{el.title}</span>}
                                <BsPencil/>
                            </span>
                    }

                <button className="btn btn-outline-secondary float-right btn-sm ml-2"
                        type="button"
                        onClick={() => props.onTaskDelete(el.id)}>
                    <GiCrossMark/>
                </button>
                <button className="btn btn-outline-secondary float-right btn-sm"
                        type="button"
                        onClick={() => props.onTaskDoneToggle(el.id)}>
                    {el.done? 'Undone': 'Done'}
                </button>
                   <span className='mr-2 ml-2'>
                       {el.done ?  <IoIosCheckmarkCircleOutline color='green' size='1.3rem'/> : null}
                   </span>

            </li>)

            }
        </div>
    );
}

export default List;
