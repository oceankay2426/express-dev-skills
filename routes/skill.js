const skill = require('skill');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET users listing. */
// GET /todos (index functionality/action -> list all todos)

router.get('/', skillsCtrl.index );

//get single skill
router.get('/:id', skillsCtrl.show);
module.exports = router;

