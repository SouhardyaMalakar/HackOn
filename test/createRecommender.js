// Get service clients module and commands using ES6 syntax.
import { CreateRecommenderCommand } from "@aws-sdk/client-personalize";
import { personalizeClient } from "./libs/personalizeClients.js";

// Or, create the client here.
// const personalizeClient = new PersonalizeClient({ region: "REGION"});

// Set the recommender's parameters.
export const createRecommenderParam = {
	name: "PewPewRecommender" /* required */,
	recipeArn: "arn:aws:personalize:::recipe/aws-vod-top-picks" /* required */,
	datasetGroupArn:
		"arn:aws:personalize:ap-south-1:772440233846:dataset-group/MovieRecommendationDataset" /* required */,
};

export const run = async () => {
	try {
		const response = await personalizeClient.send(
			new CreateRecommenderCommand(createRecommenderParam)
		);
		console.log("Success", response);
		return response; // For unit tests.
	} catch (err) {
		console.log("Error", err);
	}
};
run();
