import '../component/detail-hero';
import '../component/loader-ring';
import '../component/detail-resto';
import UrlParser from '../../routes/url-parser';
import RestoApiSource from '../../data/resto-api';

const DetailResto = {
    async render() {
        return `
        <detail-hero></detail-hero>
        <loader-ring></loader-ring>
    `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const resto = await RestoApiSource.detailResto(url.id);
        const detailResto = document.createElement('detail-resto');
        const mainContent = document.querySelector('#mainContent');

        detailResto.setDetailResto = resto;
        mainContent.appendChild(detailResto);
    }
};

export default DetailResto;
