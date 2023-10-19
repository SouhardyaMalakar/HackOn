import { PersonalizeClient } from "@aws-sdk/client-personalize";
import { PersonalizeRuntimeClient } from "@aws-sdk/client-personalize-runtime";
import { PersonalizeEventsClient } from "@aws-sdk/client-personalize-events";
// Set your AWS region.
const REGION = "ap-south-1"; //e.g. "us-east-1"

const personalizeClient = new PersonalizeClient({ region: REGION });
const personalizeEventsClient = new PersonalizeEventsClient({ region: REGION });
const personalizeRuntimeClient = new PersonalizeRuntimeClient({
	region: REGION,
});

export { personalizeClient, personalizeEventsClient, personalizeRuntimeClient };
