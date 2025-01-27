import { defineFunction } from "@aws-amplify/backend";

export const getNote = defineFunction({
	name: "getNoteById",
	entry: "./handler.ts",
});
