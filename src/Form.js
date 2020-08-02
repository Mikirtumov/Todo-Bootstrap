import React, {useState} from 'react';


function Form(props) {

    const [inputValue, setInputValue] = useState('');


    const onCreate = () => {
        props.onCreate(inputValue);
        setInputValue('');
    };

    return (
        <div className="input-group mb-3">
            <input className="form-control" placeholder="New Task" aria-label="" aria-describedby="basic-addon1" type='text'
                   value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary"
                        type="button"
                        onClick={onCreate}
                        disabled={inputValue.trim() === ''}>Create</button>
            </div>


        </div>
    );
}

export default Form;
