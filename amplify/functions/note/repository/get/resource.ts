import { defineFunction } from "@aws-amplify/backend";

export const getNote = defineFunction({
	name: "getNote",
	entry: "./handler.ts",
});
