"use client";

import { useEffect } from "react";
import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";
import { getNote } from "@/src/note";

export default function App() {
	useEffect(() => {
		getNote({ id: "1" }).then((note) => {
			console.log(JSON.stringify(note));
		});
	}, []);

	return (
		<main>
			<h1>My todos</h1>
		</main>
	);
}
