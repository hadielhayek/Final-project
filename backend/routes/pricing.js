const express=require('express')
const Pricingontroller=require ('../controllers/pricing')
const router =express.Router();

router.get('/',Pricingontroller.getallpricing)
router.get('/:id',Pricingontroller.get)
router.post('/',Pricingontroller.post)
router.put('/:id',Pricingontroller.put)
router.delete('/:id',Pricingontroller.delete)

module.exports=router