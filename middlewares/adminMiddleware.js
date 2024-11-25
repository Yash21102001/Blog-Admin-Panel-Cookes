const multer = require('multer')

const imgPath = 'uploads/'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, imgPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
})

module.exports.uploadImage = multer({ storage: storage }).single('image')