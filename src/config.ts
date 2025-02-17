const API_URL: string | undefined = process.env.API_URL;

if (!API_URL) throw new Error("Please provide an API URL!");

export { API_URL };
