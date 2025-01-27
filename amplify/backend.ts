import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource.js";
import { data } from "./data/resource.js";
import { getNote } from "./functions/getNote/resource.js";

defineBackend({
	auth,
	data,
	getNote,
});
