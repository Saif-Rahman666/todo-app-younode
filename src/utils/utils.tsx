// Fetch data from the api
export const fetchData = async ({ endpoint }: { endpoint: string }) => {
  const baseUrl = process.env.apiUrl;
  try {
    const res = await fetch(`${baseUrl}/${endpoint}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
// Post data To the api
export const postData = async ({ endpoint, method, body }: { endpoint: string; method: string; body?: string }) => {
  const baseUrl = process.env.apiUrl;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const res = await fetch(`${baseUrl}/${endpoint}`, {
      headers: headers,
      method: method,
      body: body,
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
