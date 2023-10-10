import '../component/detail-hero';
import '../component/loader-ring';
import '../component/detail-resto';
import UrlParser from '../../routes/url-parser';
import RestoApiSource from '../../data/resto-api';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import postReview from '../../utils/post-reveiw';

const DetailResto = {
    async render() {
        return `
        <detail-hero></detail-hero>
        <loader-ring></loader-ring>
        <div id="likeButtonContainer"></div>
    `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const resto = await RestoApiSource.detailResto(url.id);
        const detailResto = document.createElement('detail-resto');
        const mainContent = document.querySelector('#mainContent');

        detailResto.setDetailResto = resto;
        mainContent.appendChild(detailResto);

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            resto: {
                id: resto.id,
                name: resto.name,
                rating: resto.rating,
                city: resto.city,
                description: resto.description,
                pictureId: resto.pictureId
            }
        });

        postReview.init({
            id: resto.id,
            btnSubmit: document.getElementById('btn-submit-review')
        });
    }
};

export default DetailResto;
