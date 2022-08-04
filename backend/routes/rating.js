const express=require('express')
const ratingcontroller=require ('../controllers/rating')
const router =express.Router();

router.get('/',ratingcontroller.getallrating)
router.get('/:id',ratingcontroller.get)
router.post('/',ratingcontroller.post)
router.put('/:id',ratingcontroller.put)
router.delete('/:id',ratingcontroller.delete)

module.exports=router