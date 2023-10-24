// Get service clients module and commands using ES6 syntax.
import { CreateSchemaCommand } from "@aws-sdk/client-personalize";
import { personalizeClient } from "./libs/personalizeClients.js";

// Or, create the client here.
// const personalizeClient = new PersonalizeClient({ region: "REGION"});

import fs from "fs";

let schemaFilePath = "./pewpew_schema.json";
let mySchema = "";

try {
	mySchema = fs.readFileSync(schemaFilePath).toString();
} catch (err) {
	mySchema = "TEST"; // for unit tests.
}

// Set the domain schema parameters.
export const createDomainSchemaParam = {
	name: "MovieRecommendationSchema" /* required */,
	schema: mySchema /* required */,
	domain: "VIDEO_ON_DEMAND" /* required for a domain dataset group, specify ECOMMERCE or VIDEO_ON_DEMAND */,
};

export const run = async () => {
	try {
		const response = await personalizeClient.send(
			new CreateSchemaCommand(createDomainSchemaParam)
		);
		console.log("Success", response);
		return response; // For unit tests.
	} catch (err) {
		console.log("Error", err);
	}
};
run();
