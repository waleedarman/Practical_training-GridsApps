import express from "express";
import { z } from "zod";

const app = express();
app.use(express.json());

const schema = z.object({
  email: z.string().email(),
  age: z.number().int().min(0)
});

app.post("/user", (req, res) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ error: result.error.issues });

  }

  res.json({ message: "Valid", data: result.data });
});

app.listen(3000, () => console.log(" Server on http://localhost:3000"));
