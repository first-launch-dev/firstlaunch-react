const publicURL = (path = "") => {
  return `${process.env.REACT_APP_MY_APP_URL}${path}`;
};
const apiUrl = (path = "") => {
  return `${process.env.REACT_APP_MY_APP_API_URL}${path}`;
};
const siteTitle = () => {
  return `${process.env.REACT_APP_MY_APP}`;
};

export {
  siteTitle,
  apiUrl,
  publicURL
};