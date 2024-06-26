const { config } = require('dotenv');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CD_NAME,
  api_key: process.env.CD_KEY,
  api_secret: process.env.CD_SECRET,
});

const CdStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'tickitz',
    public_id: (req, file) => Date.now() + path.extname(file.originalname), // mendefinisikan nama file
  },
});
module.exports = CdStorage;
