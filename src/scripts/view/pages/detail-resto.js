import '../component/detail-hero';
import '../component/loader-ring';
import '../component/detail-resto';
import UrlParser from '../../routes/url-parser';
import RestoApiSource from '../../data/resto-api';
import searchBarFavorite from '../../utils/searchbar-favorite';
import LikeButtonInitiator from '../../utils/like-button-initiator';

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
    }
};

export default DetailResto;
