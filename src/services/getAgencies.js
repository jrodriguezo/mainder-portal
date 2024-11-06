import { BASE_URL_VERSION, ENDPOINTS } from "../config";

export default async function getAgencies() {
  try {
    const url = BASE_URL_VERSION + ENDPOINTS.AGENCIES;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();

    return [null, data];
  } catch (error) {
    console.error("Error fetching agencies:", error);
    return [404, null];
  }
}
