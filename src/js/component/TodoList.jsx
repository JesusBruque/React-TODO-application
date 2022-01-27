import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const TodoList = (props) => {
	const [isChecked, setIsChecked] = useState(false);
	const handleOnChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<>
			<ul className="list-group list-group-flush container">
				<li className="list-group-item"></li>
				<li className="list-group-item d-flex bd-highlight">
					<div className="p-2 flex-grow-1 bd-highlight">
						{props.todo}
					</div>
					<Form.Check
						className="checkbox p-2 bd-highlight"
						checked={isChecked}
						onChange={handleOnChange}
						type={"checkbox"}
					/>
					<i
						className="far fa-trash-alt p-2 bd-highlight my-1"
						onClick={() => props.delete(props.id)}></i>
				</li>
			</ul>
		</>
	);
};

TodoList.propTypes = {
	todo: PropTypes.string,
	delete: PropTypes.func,
	id: PropTypes.number,
};

export default TodoList;
