const postInput = document.getElementById("postInput");
const postButton = document.getElementById("postButton");
const feed = document.querySelector(".feed");


/* =========================
   CREATE NEW POST
========================= */

postButton.addEventListener("click", function () {

    const text = postInput.value.trim();

    if (text === "") {
        alert("Please write something before posting.");
        postInput.focus();
        return;
    }

    const post = document.createElement("article");

    post.className = "post card new-post";

    post.innerHTML = `
        <div class="post-header">

            <div>
                <h3>Santhosh</h3>
                <span>@santhosh_07 · now</span>
            </div>

            <button class="more-button">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>

        </div>

        <div class="post-content">

            <p>${escapeHTML(text)}</p>

        </div>

        <div class="post-actions">

            <button class="action like-button">

                <i class="fa-solid fa-heart"></i>

                <span class="like-count">0</span>

            </button>

            <button class="action">

                <i class="fa-regular fa-comment"></i>

                <span>0</span>

            </button>

            <button class="action">

                <i class="fa-solid fa-arrow-up-from-bracket"></i>

                <span>Share</span>

            </button>

        </div>
    `;

    const firstPost = feed.querySelector(".post");

    feed.insertBefore(post, firstPost);

    postInput.value = "";

    addLikeFunction(post);

});


/* =========================
   LIKE BUTTON
========================= */

function addLikeFunction(post) {

    const likeButton = post.querySelector(".like-button");
    const likeCount = post.querySelector(".like-count");

    likeButton.addEventListener("click", function () {

        let count = parseInt(likeCount.textContent);

        if (likeButton.classList.contains("liked")) {

            count--;

            likeButton.classList.remove("liked");

        } else {

            count++;

            likeButton.classList.add("liked");

        }

        likeCount.textContent = count;

    });
}


document.querySelectorAll(".post").forEach(function (post) {

    addLikeFunction(post);

});


/* =========================
   TOOL BUTTONS
========================= */

const toolButtons = document.querySelectorAll(".tools button");

toolButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const icon = button.querySelector("i");

        if (icon.classList.contains("fa-face-smile")) {

            postInput.value += " 😊";

        } else if (icon.classList.contains("fa-location-dot")) {

            postInput.value += " 📍 My location";

        } else if (icon.classList.contains("fa-image")) {

            alert("Image upload feature can be connected here.");

        }

        postInput.focus();

    });

});


/* =========================
   ENTER KEY
========================= */

postInput.addEventListener("keydown", function (event) {

    if (event.ctrlKey && event.key === "Enter") {

        postButton.click();

    }

});


/* =========================
   SECURITY
========================= */

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}