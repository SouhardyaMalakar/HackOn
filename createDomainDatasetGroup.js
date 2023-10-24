// Get service clients module and commands using ES6 syntax.
import { CreateDatasetGroupCommand } from "@aws-sdk/client-personalize";
import { personalizeClient } from "./libs/personalizeClients.js";

// Or, create the client here.
// const personalizeClient = new PersonalizeClient({ region: "REGION"});

// Set the domain dataset group parameters.
export const domainDatasetGroupParams = {
	name: "MovieRecommendationDataset" /* required */,
	domain: "VIDEO_ON_DEMAND" /* required for a domain dsg, specify ECOMMERCE or VIDEO_ON_DEMAND */,
};

export const run = async () => {
	try {
		const response = await personalizeClient.send(
			new CreateDatasetGroupCommand(domainDatasetGroupParams)
		);
		console.log("Success", response);
		return response; // For unit tests.
	} catch (err) {
		console.log("Error", err);
	}
};
run();
