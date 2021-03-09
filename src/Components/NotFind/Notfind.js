import React from "react";
import { Card } from "react-bootstrap";

const Notfind = () => {
	return (
		<div>
			<Card
				bg="danger"
				text="light"
				style={{ width: "18rem" }}
				className="mb-2  ml-auto mr-auto text-center"
			>
				<Card.Header>Sorry</Card.Header>
				<Card.Body>
					<Card.Title>404</Card.Title>
					<Card.Text>Sorry Sir.</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Notfind;
