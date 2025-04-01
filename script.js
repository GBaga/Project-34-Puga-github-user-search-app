const defaultSearch = document.querySelector("#default-search");
const form = document.querySelector("form");
let profileImg = document.querySelector(".profile-img");
let profileName = document.querySelector(".profile-name");
let profileNickname = document.querySelector(".profile-nickname");
let createdDate = document.querySelector(".created-date");
let bio = document.querySelector(".profile-desc");
let repos = document.querySelector(".repos");
let followers = document.querySelector(".followers");
let following = document.querySelector(".following");
let userLocation = document.querySelector(".location");
let githubBlog = document.querySelector(".github-blog");
let twitter = document.querySelector(".twitter");
let github = document.querySelector(".github");

console.dir(createdDate);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`https://api.github.com/users/${defaultSearch.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const dateStr = data.created_at;
      const date = new Date(dateStr);

      const formattedDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

      profileImg.src = data.avatar_url;
      profileName.innerText = data.name;
      profileNickname.innerText = data.login;
      createdDate.innerText = `Joined ${formattedDate}`;
      bio.innerText = data.bio;
      repos.innerText = data.public_repos;
      followers.innerText = data.followers;
      following.innerText = data.following;
      if (userLocation)
        userLocation.innerText = data?.location?.trim()
          ? data.location
          : "No location available";
      if (githubBlog) githubBlog.innerText = data.blog || "No blog available";
      if (twitter) twitter.innerText = data.twitter_username || "No Twitter";
      if (github)
        github.innerText = data.login ? `@${data.login}` : "No GitHub username";
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(defaultSearch.value);
  defaultSearch.value = "";
});
