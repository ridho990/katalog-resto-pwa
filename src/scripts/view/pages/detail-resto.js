import '../component/detail-hero';
import '../component/loader-ring';
import '../component/detail-resto';
import UrlParser from '../../routes/url-parser';
import RestoApiSource from '../../data/resto-api';
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
        try {
            const url = UrlParser.parseActiveUrlWithoutCombiner();
            const resto = await RestoApiSource.detailResto(url.id);
            const detailResto = document.createElement('detail-resto');
            const mainContent = document.querySelector('#mainContent');

            detailResto.setDetailResto = resto;
            mainContent.appendChild(detailResto);

            LikeButtonInitiator.init({
                likeButtonContainer: document.querySelector(
                    '#likeButtonContainer'
                ),
                resto: {
                    id: resto.id,
                    name: resto.name,
                    rating: resto.rating,
                    city: resto.city,
                    description: resto.description,
                    pictureId: resto.pictureId
                }
            });

            DialogueError.init({
                btnClose: document.getElementById('btn-close-x'),
                btnYes: document.getElementById('yes-button'),
                overlay: document.querySelector('.overlay-dialogue'),
                wrapperDialogue: document.querySelector('.card-dialogue-eror')
            });
        } catch (error) {
            alert(error);
            console.error('Error:', error);
        }
    }
};

export default DetailResto;
