import express from "express";
import ArticleController from "../controllers/ArticleController.mjs";

const router = express.Router()

router.get('/', ArticleController.index)

router.get('/create', ArticleController.create)

router.post('/store', ArticleController.store)

router.get('/find/:id', ArticleController.find)

router.get('/edit/:id', ArticleController.edit)

router.patch('/update/:id', ArticleController.update)

router.delete('/delete/:id', ArticleController.destroy)

export default router