let puppyImageElement = document.getElementById("puppyImage");
let likeIconElement = document.getElementById("likeIcon");
let likeButtonElement = document.getElementById("likeButton");

let puppyLikedImageElement = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
let puppyUnLikedImageElement = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png"
let isImageLiked = false;

function onClickLikeButton() {
    if (isImageLiked === false) {
        puppyImageElement.src = puppyLikedImageElement;
        likeIconElement.style.color = "#0967d2";
        likeButtonElement.style.backgroundColor = "#0967d2";
        likeButtonElement.style.color = "#cbd2d9";
        isImageLiked = true;
    } else {
        puppyImageElement.src = puppyUnLikedImageElement;
        likeIconElement.style.color = "#9aa5b1";
        likeButtonElement.style.backgroundColor = "#9aa5b1";
        likeButtonElement.style.color = "";
        isImageLiked = false;
    }

}