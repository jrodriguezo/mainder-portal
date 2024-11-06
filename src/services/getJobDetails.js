import { BASE_URL_VERSION } from "../config";

export async function getJobDetails(agency_slug, job_id) {
  try {
    const response = await fetch(
      `${BASE_URL_VERSION}/career-site/${agency_slug}/job/${job_id}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return [null, data];
  } catch (error) {
    console.error("Error fetching job details:", error);
    return [404, null];
  }
}
