import React, {useState} from 'react';
import './style.css';


const App = () => {

    const [task, setTask] = useState([
        'task 1',
        'task 2',
        'task 3'
    ]);

    return (
        <div className={'wrapper'}>
            <div className={'card frame'}>
                <Header todoNumber={task.length}/>
                <TodoList tasks={task}/>
            </div>
        </div>
    );
};

const Header = (props) => {
    return (
        <div className={'card-header'}>
            <h1 className={'card-header-title header'}>
                You have {props.todoNumber} Todos
            </h1>
        </div>
    )
};

const TodoList = (props) => {
    const todos = props.tasks.map((todo, index) => {
        return <Todo content={todo} key={index} id={index} />
    });
    return(
        <div className='list-wrapper'>
            {todos}
        </div>
    );
};

const Todo = (props) => {
    return(
        <div className='list-item'>
            {props.content}
            <button class="delete is-pulled-right"></button>
        </div>
    );
}

export default App;
