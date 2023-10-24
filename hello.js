const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3");

// Create an S3 client
const s3Client = new S3Client({ region: "ap-south-1" }); // Replace 'your-region' with your AWS region.

// Define an async function to list S3 buckets
async function listS3Buckets() {
	try {
		const data = await s3Client.send(new ListBucketsCommand({}));
		console.log("Buckets", data.Buckets);
	} catch (err) {
		console.error("Error", err);
	}
}

// Call the function to list S3 buckets
listS3Buckets();
