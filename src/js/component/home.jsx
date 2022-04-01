import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

//Import Components
import TodoList from "./TodoList.jsx";

let priority = "";
let task = "";
let countNormal = 0;
let countImportant = 0;
let countUrgent = 0;

//create your first component
const Home = () => {
	const [list, setList] = useState([]);
	const [todo, setTodo] = useState({
		task: "",
		priority: "",
	});

	const listTodo = () => {
		return list.map((todo, index) => {
			return (
				<TodoList
					key={index}
					id={index}
					todo={todo}
					delete={deleteTodo}
					handle={handleChangeRadio}
				/>
			);
		});
	};

	console.log(list);
	console.log(todo);

	const handleClick = () => {
		const newList = [...list, todo];
		setList(newList);
	};

	const handleChangeRadio = () => {};

	const deleteTodo = (id) => {
		const listDelete = [...list];
		listDelete.splice(id, 1);
		setList(listDelete);
	};

	return (
		<div className="card container d-flex justify-content-center col-6">
			<div className="card-body row">
				<div className="col-12 d-flex justify-content-center">
					<h5 className="card-title">TO DO LIST</h5>
				</div>
				<div className="col-12 d-flex justify-content-center">
					<p className="card-text row">
						Add the tasks to create your list
					</p>
				</div>
				<InputGroup
					id="new-todo"
					onChange={(e) => {
						setTodo(e.target.value);
					}}
					size="lg">
					<FormControl
						aria-label="Large"
						aria-describedby="inputGroup-sizing-sm"
					/>
				</InputGroup>
				<div className="d-flex justify-content-center my-2">
					<Button
						className="col-4"
						onClick={handleClick}
						variant="primary">
						New Task
					</Button>
				</div>
			</div>
			{!list.length ? (
				<div className="alert alert-info border-2" role="alert">
					List empty!
				</div>
			) : (
				listTodo()
			)}
			<div>
				<span className="badge bg-light text-dark me-2">
					Total Tasks: {list.length}
				</span>
				<span className="badge bg-success text-dark me-2">
					Normal Tasks: {}
				</span>
				<span className="badge bg-warning text-dark me-2">
					Important Tasks: {}
				</span>
				<span className="badge bg-danger text-dark me-2">
					Urgent Tasks: {}
				</span>
			</div>
		</div>
	);
};

export default Home;
