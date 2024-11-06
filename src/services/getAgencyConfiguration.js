import { BASE_URL_VERSION } from "../config";

export async function getAgencyConfiguration(agency_slug) {
  const url =
    BASE_URL_VERSION + `/career-site/agency/${agency_slug}/configuration`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return [null, data];
  } catch (error) {
    console.error("Error fetching agency configuration:", error);
    return [404, null];
  }
}
