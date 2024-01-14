// Account
import { SignUp } from "./account/signup.js";
import { SignIn } from "./account/signin.js";
import {Authorization} from "./account/authorization.js";

// Articles CRUD

import { postArticle } from "./articles/postarticle.js";
import { getArticle } from "./articles/getArticle.js";
import { deleteArticle } from "./articles/deleteArticle.js";
import { updateArticle } from "./articles/updateArticle.js";

// Articles View
import { lastArticle } from "./webfunc/getlastnew.js";

// Misc
import { Logout } from "./cookies/logout.js";
import { Login } from "./cookies/login.js";
import { elements } from "./cookies/elements.js";




window.login = Login;
window.signup = SignUp;
window.logout = Logout;
window.newarticle = NewArticle;

const Element = document.getElementById('');
const Authorization = document.getElementById('Authorization');
const logoutprocess = document.getElementById('logout');
const loginview = document.getElementById('')

if (Element) {
    getArticle()
} else {
    console.log('Element not found')
}

if (Authorization) {
    Authorization()
} else {
    console.log('Authorization not found')
}

if (!document.cookie.includes('token')) {

    if (logoutprocess) {
        logoutprocess.style.display = 'none';
    } else {
        console.log('logoutprocess not found')
    }
} else {
    if (loginview) {
        loginview.style.display = 'none';
    } else {
        console.log('"LoginView" Element Not Found')
    }
}

