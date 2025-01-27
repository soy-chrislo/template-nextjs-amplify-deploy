import type { Schema } from "../../data/resource";

export const handler: Schema["getNoteById"]["functionHandler"] = async (
	event,
) => {
	const { id } = event.arguments;

	return {
		title: "Note 1",
		content: "This is a note.",
		id: id,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	} as unknown as never;
};
