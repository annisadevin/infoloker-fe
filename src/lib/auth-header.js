export default function authHeader() {
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIERldGFpbHMiLCJ1aWQiOjIsImlzcyI6IkJOQyIsImV4cCI6MTY5MDU4MzY0OCwiaWF0IjoxNjkwNTgyNzQ4fQ.CkBOoUtBGBFQ_jb5-r-EdLsq9-dJ4kIySofTzLhLtgY";
  let authToken = `Bearer ${token}`;
  return {
    Authorization: authToken,
  };
}
