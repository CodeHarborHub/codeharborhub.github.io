const express = require("express");
const app = express();
const mailing = require("./mail/mail.js");
const cors = require("cors");

// CORS options
const corsOptions = {
  origin: "https://codeharborhub.github.io", // Allow requests from this origin
  methods: ["GET", "POST"], // Allow only GET and POST requests
  allowedHeaders: ["Content-Type"], // Allow only headers with Content-Type
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
    const { name, email, feedback } = req.body;

    if (!name || !email || !feedback) {
      return res
        .status(400)
        .json({ ok: false, text: "Missing required fields" });
    }

    const result = await mailing(name, email, feedback);

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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
