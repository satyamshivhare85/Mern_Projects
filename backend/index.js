import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const port = 8000;

let password = "shubhamkichut123";

// Password check middleware (put BEFORE routes)
app.use((req, res, next) => {
  if (req.method === "POST") {
    if (req.body.pass !== password) {
      return res.status(200).send("password doesn't match");
    }
  }
  next();
});

app.get("/", (req, res) => {
  res.set("x-name", "satyam");

  // Remove content-length safely BEFORE sending
  res.removeHeader("Content-Length");

  // Send response manually (to avoid auto content-length)
  res.send(JSON.stringify({ name: "shubham", biaku: 100 }));
});


app.post("/", (req, res) => {
  console.log("Body received:", req.body);
  res.send({ status: "success" });
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
