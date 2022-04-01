import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoList = (props) => {
	return (
		<>
			<ul className="list-group list-group-flush container">
				<li className="list-group-item d-flex bd-highlight">
					<div className="p-2 flex-grow-1 bd-highlight">
						{props.todo}
					</div>
					<div className="badge bg-success text-dark my-2 me-2">
						<input
							type="radio"
							value="normal"
							name="priority"
							onChange={() => props.handle(props.id)}
						/>
					</div>

					<div className="badge bg-warning text-dark my-2 me-2">
						<input
							type="radio"
							value="important"
							name="priority"
							onChange={() => props.handle(props.id)}
						/>
					</div>
					<div className="badge bg-danger text-dark my-2 me-2">
						<input
							type="radio"
							value="urgent"
							name="priority"
							onChange={() => props.handle(props.id)}
						/>
					</div>

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
	handle: PropTypes.func,
};

export default TodoList;
