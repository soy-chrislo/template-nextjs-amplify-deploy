import { amplifyClient } from "./config";

export async function getNote({ id }: { id: string }) {
	return await amplifyClient.queries.getNoteById({ id });
}
