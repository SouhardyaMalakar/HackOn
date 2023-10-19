// Get service clients module and commands using ES6 syntax.
import { CreateDatasetCommand } from "@aws-sdk/client-personalize";
import { personalizeClient } from "./libs/personalizeClients.js";

// Or, create the client here.
// const personalizeClient = new PersonalizeClient({ region: "REGION"});

// Set the dataset's parameters.
export const createDatasetParam = {
	datasetGroupArn:
		"arn:aws:personalize:ap-south-1:772440233846:dataset-group/MovieRecommendationDataset" /* required */,
	datasetType: "Interactions" /* required */,
	name: "PewPewDataset" /* required */,
	schemaArn:
		"arn:aws:personalize:ap-south-1:772440233846:schema/MovieRecommendationSchema" /* required */,
};

export const run = async () => {
	try {
		const response = await personalizeClient.send(
			new CreateDatasetCommand(createDatasetParam)
		);
		console.log("Success", response);
		return response; // For unit tests.
	} catch (err) {
		console.log("Error", err);
	}
};
run();
