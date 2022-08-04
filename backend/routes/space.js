const express=require('express')
const Spacecontroller=require ('../controllers/space')
const router = express.Router();

router.get('/',Spacecontroller.getallspace)
router.get('/:id',Spacecontroller.get)
router.post('/',Spacecontroller.post)
router.put('/:id',Spacecontroller.put)
router.delete('/:id',Spacecontroller.delete)

module.exports=router