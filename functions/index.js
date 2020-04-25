const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');



const {
    loginUser, signUpUser, uploadProfilePhoto, getUserDetail, updateUserDetails
} = require('./APIs/user')
app.post('/login',loginUser);
app.post('/signup', signUpUser);


const {
    getAllAticles, createArticle, updateArticle, deleteArticle, showArticle
} = require('./APIs/blog');

app.get('/articles', getAllAticles);
app.post('/article', auth, createArticle);
app.put('/article/:articleId', auth, updateArticle);
app.delete('/article/:articleId',auth , deleteArticle);
app.get('/article/:articleId', showArticle);

exports.api = functions.https.onRequest(app);