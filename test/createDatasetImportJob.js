// Get service clients module and commands using ES6 syntax.
import { CreateDatasetImportJobCommand } from "@aws-sdk/client-personalize";
import { personalizeClient } from "./libs/personalizeClients.js";

// Or, create the client here.
// const personalizeClient = new PersonalizeClient({ region: "REGION"});

// Set the dataset import job parameters.
export const datasetImportJobParam = {
	datasetArn:
		"arn:aws:personalize:ap-south-1:772440233846:dataset/MovieRecommendationDataset/INTERACTIONS" /* required */,
	dataSource: {
		/* required */ dataLocation: "s3://test-bucket-pewpew/ratings.csv",
	},
	jobName: "PewPew-JobImport" /* required */,
	roleArn: "arn:aws:iam::772440233846:role/pewpew_role" /* required */,
};

export const run = async () => {
	try {
		const response = await personalizeClient.send(
			new CreateDatasetImportJobCommand(datasetImportJobParam)
		);
		console.log("Success", response);
		return response; // For unit tests.
	} catch (err) {
		console.log("Error", err);
	}
};
run();
