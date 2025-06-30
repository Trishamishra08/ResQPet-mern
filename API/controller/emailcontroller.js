import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'trishamishra115@gmail.com',
    pass: '',
  },
});

// 📨 Generic status-based mail
export const sendStatusEmail = async (toEmail, ngoName, status) => {
  let subject = "";
  let body = "";

  if (status === "approved") {
    subject = "Your NGO has been approved!";
    body = `<p>Dear <strong>${ngoName}</strong>,<br><br>
      🎉 Congratulations! Your NGO has been <strong>approved</strong> by the ResQPet Admin.<br>
      You can now log in and start participating in pet rescue operations.<br><br>
      Thank you for being part of the mission 🐾<br><br>
      Regards,<br><strong>ResQPet Team</strong>
    </p>`;
  }

  else if (status === "blocked") {
    subject = "Your NGO account has been blocked";
    body = `<p>Dear <strong>${ngoName}</strong>,<br><br>
      ⚠️ Your NGO account has been <strong>blocked</strong> by the ResQPet Admin.<br>
      This may be due to violations of our guidelines or suspicious activity.<br>
      Please contact the admin for clarification.<br><br>
      Regards,<br><strong>ResQPet Team</strong>
    </p>`;
  }

  else if (status === "rejected") {
    subject = "Your NGO registration has been rejected";
    body = `<p>Dear <strong>${ngoName}</strong>,<br><br>
      ❌ We're sorry to inform you that your NGO registration has been <strong>rejected</strong> by the ResQPet Admin.<br>
      You may revise your information and apply again if needed.<br><br>
      Thank you for your interest.<br><br>
      Regards,<br><strong>ResQPet Team</strong>
    </p>`;
  }

  const mailOptions = {
    from:'"ResQPet Team" <trishamishra115@gmail.com>',
    to: toEmail,
    subject,
    html: body,
  };

    transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error(" Email failed to send:", error.message);
    } else {
      console.log("Email sent:", info.response);
    }
  });

};
