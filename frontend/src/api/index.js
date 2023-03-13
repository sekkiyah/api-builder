const BASE_URL = 'http://localhost:8080/api';

const createHeaders = jwt => {
  return jwt
    ? {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      }
    : {
        'Content-Type': 'application/json',
      };
};

export const getAllCompanies = async () => {
  try {
    const headers = createHeaders();
    return await fetch(`${BASE_URL}/companies`, {
      headers,
    })
      .then(response => response.json())
      .then(data => data._embedded.companies);
  } catch (error) {
    console.error(error);
  }
};
