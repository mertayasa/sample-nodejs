import express from "express";
import ArticleController from "../controllers/ArticleController.mjs"
import imageUpload from "../utils/ImageUpload.mjs";

const router = express.Router()

router.get('/', ArticleController.index)

router.get('/paginate', ArticleController.paginate)

router.get('/create', ArticleController.create)

router.post('/store', imageUpload.single('thumbnail'), ArticleController.store)

router.get('/find/:id', ArticleController.find)

router.get('/edit/:id', ArticleController.edit)

router.patch('/update/:id', imageUpload.single('thumbnail'), ArticleController.update)

router.delete('/delete/:id', ArticleController.destroy)

export default router