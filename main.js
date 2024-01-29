// Account
import { SignUp } from "./account/signup.js";
import { SignIn } from "./account/signin.js";
import {Authorization} from "./account/authorization.js";

// Articles CRUD

import { postArticle } from "./articles/postarticle.js";
import { getArticle } from "./articles/getarticle.js";
import { deleteArticle } from "./articles/deletearticle.js";
import { updateArticle } from "./articles/updateArticle.js";

// Articles View
import { searchArticle } from "./webfunc/search.js";
import { lastArticle } from "./webfunc/getlastnew.js";

// Misc
import { Logout } from "./cookies/logout.js";
import { Login } from "./cookies/login.js";
import { elements } from "./cookies/elements.js";


window.login = Login;
window.signup = SignUp;
window.logout = Logout;
window.newarticle = NewArticle;

if (signup) {
    signup.addEventListener('click', SignUp);
} else {
    console.log('signup not found. Please check your HTML file.')
}

if (loginprocess) {
    loginprocess.addEventListener('click', SignIn);
} else {
    console.log('loginprocess not found. Please check your HTML file.')
}

if (searchArticle) {
    searchArticle()
} else {
    console.log('searchArticle not found. Please check your HTML file.')
}

if (postarticle) {
    postArticle()
} else {
    console.log('postarticle not found. Please check your HTML file.')
}

if (deletearticle) {
    deleteArticle()
} else {
    console.log('deletearticle not found. Please check your HTML file.')
}

if (updatearticle) {
    updateArticle()
} else { 
    console.log('updatearticle not found. Please check your HTML file.')
}

if (getarticle) {
    getArticle()
} else {
    console.log('getarticle not found. Please check your HTML file.')
}

if (lastnew) {
    lastArticle()
} else {
    console.log('lastnew not found. Please check your HTML file.')
}

if (Element) {
    getArticle()
} else {
    console.log('Element not found. Please check your HTML file.')
}

if (Authorization) {
    Authorization()
} else {
    console.log('Authorization not found. Please check your HTML file.')
}

if (!document.cookie.includes('token')) {

    if (logoutprocess) {
        logoutprocess.style.display = 'none';
    } else {
        console.log('logoutprocess not found. Cookies processing failed.')
    }
} else {
    if (loginview) {
        loginview.style.display = 'none';
    } else {
        console.log('"LoginView" Element Not Found. Cookies processing failed.')
    }
}

