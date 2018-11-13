import app from "./App";

app.listen(3000, (err: Error) => {
  if (err) {
    return console.error(err);
  }
  console.log("running on port 3000");
});
