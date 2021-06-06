let queryString = decodeURIComponent(window.location.search);
mail = queryString.substring(1);

const url = "http://localhost/IWP-Project/Backend/main_page.php";

async function getBlogsData() {
  let dataPackager = new FormData();
  dataPackager.append("action", "blogs");
  return await fetch(url, {
    method: "POST",
    body: dataPackager,
  }).then((data) => data.json());
}

async function getQuotesData() {
  let dataPackager = new FormData();
  dataPackager.append("action", "quotes");
  return await fetch(url, {
    method: "POST",
    body: dataPackager,
  }).then((data) => data.json());
}

function blogData() {
  setTimeout(async function () {
    let val = await getBlogsData();
    setTimeout(function () {
      let title = val.title;
      let name = val.name;
      let content = val.content;
      new Blogs(title, name, content);
      tileOnClick();
    }, 200);
  }, 0);
}
function QuoteData() {
  setTimeout(async function () {
    let val = await getQuotesData();
    setTimeout(function () {
      let name = val.name;
      let content = val.content;
      console.log(name);
      console.log(content);
      new Quotes(content, name);
      tileOnClick();
    }, 200);
  }, 0);
}
function insertQuoteData(content) {
  setTimeout(async function () {
    let dataPackager = new FormData();
    dataPackager.append("action", "insertQuote");
    dataPackager.append("mail", mail);
    dataPackager.append("content", content);
    let result = await fetch(url, {
      method: "POST",
      body: dataPackager,
    }).then((response) => response.text());
    setTimeout(function () {
      if (result == "true") {
        console.log(result);
        alert("Quote uploaded!");
      }
    }, 400);
  }, 0);
}

function insertBlogData(title, content) {
  let dataPackager = new FormData();
  dataPackager.append("action", "insertBlog");
  dataPackager.append("mail", mail);
  dataPackager.append("title", title);
  dataPackager.append("content", content);
  setTimeout(async function () {
    let result = await fetch(url, {
      method: "POST",
      body: dataPackager,
    }).then((response) => response.text());
    setTimeout(function () {
      console.log(result);
      if (result == "true") {
        alert("Blog uploaded!");
      }
    }, 400);
  }, 0);
}

function poll_for_details() {
  let dataPackager = new FormData();
  dataPackager.append("action", "poll");
  dataPackager.append("mail", mail);
  setTimeout(async function () {
    let result = await fetch(url, {
      method: "POST",
      body: dataPackager,
    }).then((response) => response.json());
    setTimeout(function () {
      document.querySelector(".inner-nav").style.display = "none";
      removeAllElements(main);
      const secProfile = document.createElement("section");
      secProfile.classList.add("profile");
      let att = document.createAttribute("data-aos");
      att.value = "zoom-in";
      secProfile.setAttributeNode(att);

      const img = document.createElement("img");
      img.src = "../Assets/profile_w.png";
      img.id = "p-icon";
      secProfile.appendChild(img);

      const name = document.createElement("div");
      name.classList.add("details");
      name.innerHTML = `Name: ${result.name}`;
      secProfile.appendChild(name);

      const username = document.createElement("div");
      username.classList.add("details");
      username.innerHTML = `Username: ${result.username}`;
      secProfile.appendChild(username);

      const age = document.createElement("div");
      age.classList.add("details");
      age.innerHTML = `Age: ${result.age}`;
      secProfile.appendChild(age);

      const gender = document.createElement("div");
      gender.classList.add("details");
      gender.innerHTML = `Gender: ${result.gender}`;
      secProfile.appendChild(gender);

      const address = document.createElement("div");
      address.classList.add("details");
      address.innerHTML = `Address: ${result.address}`;
      secProfile.appendChild(address);


      const email = document.createElement("div");
      email.classList.add("details");
      email.innerHTML = `Mail ID: ${result.mail_id}`;
      secProfile.appendChild(email);

      const bio = document.createElement("div");
      bio.classList.add("details");
      bio.innerHTML = `Bio: ${result.bio}`;
      secProfile.appendChild(bio);

      const interests = document.createElement("div");
      interests.classList.add("details");
      interests.classList.add("interests");
      interests.innerHTML = "Interests";
      const div = document.createElement("div");
      const int1 = document.createElement("div");
      int1.classList.add("interest");
      int1.innerHTML = "Fun";
      div.appendChild(int1);
      const int2 = document.createElement("div");
      int2.classList.add("interest");
      int2.innerHTML = "Music";
      div.appendChild(int2);
      const int3 = document.createElement("div");
      int3.classList.add("interest");
      int3.innerHTML = "Work";
      div.appendChild(int3);
      interests.appendChild(div);
      secProfile.appendChild(interests);

      main.appendChild(secProfile);
    }, 500);
  }, 0);
}
