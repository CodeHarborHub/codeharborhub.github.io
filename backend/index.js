const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sendEmail = require("./mail/mail");

dotenv.config();

const app = express();

// CORS options
const corsOptions = {
  origin: "https://codeharborhub.github.io/",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("This is Counsellor web personal use only.");
});

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ ok: false, text: "Missing required fields" });
    }

    const result = await sendEmail(name, email, message);

    if (result) {
      res.json({ ok: true, text: "Message sent successfully" });
    } else {
      res.status(500).json({ ok: false, text: "Error sending message" });
    }
  } catch (error) {
    console.error("Error handling /contact request:", error);
    res.status(500).json({ ok: false, text: "Internal server error" });
  }
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
