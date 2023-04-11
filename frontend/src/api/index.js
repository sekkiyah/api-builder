export const BASE_URL = 'http://localhost:8080';

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
    return await fetch(`${BASE_URL}/api/companies`, {
      headers,
    })
      .then(response => response.json())
      .then(data => data._embedded.companies);
  } catch (error) {
    console.error(error);
  }
};

export const getCompanyById = async id => {
  try {
    const headers = createHeaders();
    return await fetch(`${BASE_URL}/api/companies/${id}`, {
      headers,
    }).then(response => response.json());
  } catch (error) {
    console.error(error);
  }
};

export const createCompany = async company => {
  try {
    const headers = createHeaders();
    return await fetch(`${BASE_URL}/api/companies`, {
      method: 'POST',
      headers,
      body: JSON.stringify(company),
    }).then(response => response.json());
  } catch (error) {
    console.error(error);
  }
};

export const updateCompany = async company => {
  try {
    const headers = createHeaders();
    return await fetch(`${BASE_URL}/api/companies/${company.id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(company),
    }).then(response => response.json());
  } catch (error) {
    console.error(error);
  }
};

export const deleteCompany = async id => {
  try {
    const headers = createHeaders();
    return await fetch(`${BASE_URL}/companies`, {
      method: 'DELETE',
      headers,
      body: JSON.stringify({ id }),
    }).then(response => response.json());
  } catch (error) {
    console.error(error);
  }
};

export const getApiBody = async id => {
  try {
    const headers = createHeaders();
    return await fetch(`${BASE_URL}/custom/api/${id}`, {
      headers,
    }).then(response => response.json());
  } catch (error) {
    console.error(error);
  }
};
