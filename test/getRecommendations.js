// Get service clients module and commands using ES6 syntax.
import { GetRecommendationsCommand } from "@aws-sdk/client-personalize-runtime";
import { personalizeRuntimeClient } from "./libs/personalizeClients.js";
// Or, create the client here.
// const personalizeRuntimeClient = new PersonalizeRuntimeClient({ region: "REGION"});

// Set the recommendation request parameters.
export const getRecommendationsParam = {
	recommenderArn:
		"arn:aws:personalize:ap-south-1:772440233846:recommender/PewPewRecommender" /* required */,
	userId: "589" /* required */,
	numResults: 15 /* optional */,
};

export const run = async () => {
	try {
		const response = await personalizeRuntimeClient.send(
			new GetRecommendationsCommand(getRecommendationsParam)
		);
		console.log("Success!", response);
		return response; // For unit tests.
	} catch (err) {
		console.log("Error", err);
	}
};
run();
