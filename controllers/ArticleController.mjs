import Article from "../models/Article.mjs";

const index = (req, res) => {
    Article.find().sort({ createdAt: -1 })
        .then((articles) => {
            let modifiedArticles = articles.map(article => ({
                ...article._doc,
                createdAt: article._doc.createdAt.toDateString(),
            }));

            const data = {
                title: "Article Page",
                articles: modifiedArticles,
            };

            res.render("article/index", data);
        })
        .catch(err => res.send(err));
}

const create = (req, res) => {
    const data = {
        title: "Create Article Page",
    };

    res.render("article/create", data);
}

const store = (req, res) => {
    const count = Math.floor(Math.random() * 1000)
    const article = new Article({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author
    })

    article.save()
        .then(() => res.redirect('/article'))
        .catch(err => res.send(err))
}

const find = (req, res) => {
    Article.findById(req.params.id)
        .then(article => {
            const data = {
                title: "Article Detail Page",
                article: article,
            };

            res.render("article/detail", data);
        })
        .catch(err => res.send(err));
}

const edit = (req, res) => {
    Article.findById(req.params.id)
        .then(article => {
            const data = {
                title: "Edit Article Page",
                article: article,
            };

            res.render("article/edit", data);
        })
        .catch(err => res.send(err));
}

const update = (req, res) => {
    Article.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
    })
    .then(() => res.json({code: 1}))
    .catch(err => {
        console.log(err);
        res.json({code: 0, message: err.message})
    })
}

const destroy = (req, res) => {
    Article.findByIdAndDelete(req.params.id)
        .then(() => res.json({code: 1}))
        .catch(err => {
            console.log(err);
            res.json({code: 0, message: err.message})
        })
}

export default {
    index,
    create,
    store,
    find,
    edit,
    update,
    destroy,
}