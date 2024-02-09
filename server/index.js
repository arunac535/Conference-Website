const express = require("express");
const colors = require("colors");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const nodemailer = require("nodemailer");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.memoryStorage(); // Store file in memory
const upload = multer({ storage: storage });

app.post("/upload-pdf", upload.single("pdf"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  try {
    // Send email with the PDF attachment
    await sendEmailWithAttachment(req.file);

    res.send("File uploaded and sent via email successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email.");
  }
});

// Function to send email with PDF attachment
async function sendEmailWithAttachment(pdfFile) {
  const transporter = nodemailer.createTransport({
    service: "your-email-service-provider",
    auth: {
      user: "your-email@example.com",
      pass: "your-email-password",
    },
  });

  const mailOptions = {
    from: "your-email@example.com",
    to: "recipient@example.com",
    subject: "PDF Attachment",
    text: "Attached is the PDF file.",
    attachments: [
      {
        filename: "document.pdf",
        content: pdfFile.buffer,
      },
    ],
  };

  await transporter.sendMail(mailOptions);
}

app.get("/", (req, res) => {
  res.send("Hello");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`.yellow.bold));
