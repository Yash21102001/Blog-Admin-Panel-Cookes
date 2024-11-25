const {Router} = require('express');
const AdminCtl = require('../controllers/admin-panelController');
const { uploadImage } = require('../middlewares/adminMiddleware');
const { adminAuth } = require('../middlewares/adminAuth');


// admin panel Router.
const Aprouter = Router();


Aprouter.get('/',adminAuth,AdminCtl.homePage);
Aprouter.get('/add_admin', AdminCtl.addAdminPage);
Aprouter.post('/add_admin',uploadImage,AdminCtl.addAdminData)
Aprouter.get('/view_admin', AdminCtl.viewAdminPage)
Aprouter.get('/edit_admin/:id', AdminCtl.editAdminPage)

Aprouter.get('/signup', AdminCtl.signupPage);
Aprouter.get('/login', AdminCtl.loginPage);

Aprouter.post('/create',AdminCtl.createAdmin)
Aprouter.post('/login',AdminCtl.login);

module.exports = Aprouter;
