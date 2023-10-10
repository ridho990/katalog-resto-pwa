const createLikeButtonTemplate = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
        <i class="fa-regular fa-heart" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like">
        <i class="fa-solid fa-heart" aria-hidden="true"></i>
    </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };
