import { APIGetArticle } from "../api/api.js";
import { get } from "../api/postfunc.js";

const titleInput = document.getElementById('title');
const loadnews = document.getElementById('loadnews');

// Load News by Recent Date

export function loadNews() {
    get(APIGetArticle, responseHandler);
}

function responseHandler(result) {
    const data = result;
    const news = data.data;
    const newsList = document.getElementById('newsList');
    newsList.innerHTML = '';
    news.forEach(element => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("post");
        newDiv.innerHTML = `
        <div class="animate_top sg vk rm xm">
        <div class="c rc i z-1 pg">
          <img class="w-full" src="${element.image}" alt="Blog" />

          <div
            class="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10"
          >
            <a href="./pages/blog-berita.html?id=${element._id}" class="vc ek rg lk gh sl ml il gi hi"
              >Read More</a
            >
          </div>
        </div>

        <div class="yh">
          <div class="tc uf wf ag jq">
            <div class="tc wf ag">
              <img src="images/icon-man.svg" alt="User" />
              <p>${element.author}</p>
            </div>
            <div class="tc wf ag">
              <img src="images/icon-calender.svg" alt="Calender" />
              <p>28 No, 2023</p>
            </div>
          </div>
          <h4 class="ek tj ml il kk wm xl eq lb">
            <a href="./pages/blog-berita.html?id=${element._id}">${element.title}</a>
          </h4>
        </div>
      </div>
        `;
        newsList.appendChild(newDiv);
    });
}