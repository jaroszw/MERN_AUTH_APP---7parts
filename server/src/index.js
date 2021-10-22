import app from "./app.js";

const PORT = process.env.PORT || 3001;

app.listen("3001", (req, res) => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
