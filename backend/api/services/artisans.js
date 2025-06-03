const { Artisan, Specialite, Categorie } = require('../models');
const { Op } = require('sequelize');
const nodemailer = require('nodemailer');

const findArtisansByCategorie = async (categorieId) => {
  return await Artisan.findAll({
    include: [
      {
        model: Specialite,
        required: true,
        include: [
          {
            model: Categorie,
            required: true,
            where: { id: categorieId }
          }
        ]
      }
    ]
  });
};

const getTopArtisans = async () => {
  const artisans = await Artisan.findAll({
    include: [
      {
        model: Specialite,
        attributes: ['nom'],
      }
    ],
    order: [['Note', 'DESC']],
    limit: 3,
    attributes: ['Nom', 'Note', 'Ville']
  });

  return artisans.map(artisan => ({
    Nom: artisan.Nom,
    Note: artisan.Note,
    Specialite: artisan.spécialité.nom,
    Ville: artisan.Ville,
  }));
}

const searchArtisansByName = async (nom) => {
  return await Artisan.findAll({
    where: {
      Nom: {
        [Op.like]: `%${nom}%`
      }
    },
    limit: 10,
  });
}

const getArtisanById = async (artisanId) => {
  return await Artisan.findOne({
    where: { id: artisanId },
    include: [
      {
        model: Specialite,
        include: [Categorie]
      }
    ]
  });
};

const sendContactEmail = async ({ artisanId, prenom, nom, email, objet, message }) => {
  try {
    const artisan = await Artisan.findOne({ where: { id: artisanId } });

    if (!artisan || !artisan.Email) {
      return { success: false, error: "L'artisan n'a pas d'adresse email." };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: artisan.Email,
      subject: `Demande de contact : ${objet}`,
      text: `
        Message envoyé par : ${prenom} ${nom}
        Email : ${email}

        Objet : ${objet}

        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Erreur dans sendContactEmail :", error);
    return { success: false, error: error.message };
  }
};

module.exports = {
  findArtisansByCategorie,
  getTopArtisans,
  searchArtisansByName,
  getArtisanById,
  sendContactEmail
};