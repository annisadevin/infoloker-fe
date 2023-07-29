export default function authHeader() {
  const dataUser = localStorage.getItem("infoloker");
  let dataToken;
  let authToken;
  if (dataUser) {
    dataToken = JSON.parse(localStorage.getItem("infoloker"));
  }
  const token = dataToken?.token;
  if (token) {
    authToken = `Bearer ${token}`;
    return {
      Authorization: authToken,
    };
  }
  return {};
}
