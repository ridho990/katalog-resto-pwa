import UrlParser from '../../routes/url-parser';
import RestoApiSource from '../../data/resto-api';

const DetailResto = {
    async render() {
        return `
      <h2>Now Playing Page</h2>
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        console.log(url);
        const resto = await RestoApiSource.detailResto(url.id);
        console.log(resto);
    }
};

export default DetailResto;
