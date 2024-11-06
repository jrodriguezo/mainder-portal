import { BASE_URL_VERSION } from "../config";

const getDataTransformed = (resp) => {
  let result = [];

  const { data } = resp ?? {};
  const { items } = data;

  if (Array.isArray(data)) {
    result = data;
  }

  if (Array.isArray(items)) {
    result = items;
  }

  return result;
};

export async function getAgencyJobs(agency_slug) {
  try {
    const url = BASE_URL_VERSION + `/career-site/${agency_slug}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const resp = await response.json();
    return [null, getDataTransformed(resp)];
  } catch (error) {
    console.error("Error fetching agency jobs:", error);
    return [404, []];
  }
}
