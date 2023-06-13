const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const port = 3000; // Choisissez le port de votre choix
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const transporter = nodemailer.createTransport({
  host: 'depro8.fcomet.com',
  port: 587,
  secure: false,
  auth: {
    user: 'accounts@meplace.org',
    pass: 'aWJ69BY8ZC5T',
  },
});

  app.post('/contact', (req, res) => {
    const { nom, email, message } = req.body;
  
    // Options de l'e-mail à envoyer
    const mailOptions = {
      from: email,
      to: 'naoussileo@gmail.com', // Remplacez par l'adresse e-mail où vous souhaitez recevoir les messages
      subject: 'Nouveau message de contact',
      text: `Nom: ${nom}\nEmail: ${email}\nMessage: ${message}`,
    };
  
    // Envoi de l'e-mail
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.send("Une erreur s'est produite lors de l'envoi du message.");
      } else {
        console.log('E-mail envoyé :', info.response);
        res.send('Votre message a été envoyé avec succès.');
      }
    });
  });

  app.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
  });
  
  
