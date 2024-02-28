import express, { Request, Response } from "express";
import path from "path";

const app = express();
const port = 3001;

app.get("/", (req: Request, res: Response) => {
  // Resolve and normalize the file path
  const filePath = path.resolve(
    path.normalize(path.join(__dirname, "./basic-page/index.html"))
  );

  // Send the HTML file
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
