import '../component/home-hero';
import '../component/home-info';
import '../component/home-layanan';
import '../component/jenis-kuliner';
import '../component/resto-populer';
import '../component/galeri-resto';
import '../component/home-ulasan';
import '../component/card-resto';
import RestoApiSource from '../../data/resto-api';

const Home = {
    async render() {
        return `
        <home-hero></home-hero>
        <home-info></home-info>
        <home-layanan></home-layanan>
        <jenis-kuliner></jenis-kuliner>
        <resto-populer></resto-populer>
        <galeri-resto></galeri-resto>
        <home-ulasan></home-ulasan>
    `;
    },

    async afterRender() {
        try {
            const listResto = await RestoApiSource.listResto();
            const wrapperCard = document.querySelector(
                '.resto-populer__wrapper-card'
            );

            listResto.splice(0, 3).forEach((resto) => {
                const cardResto = document.createElement('card-resto');
                cardResto.cardData = resto;
                wrapperCard.appendChild(cardResto);
            });
        } catch (error) {
            alert(error);
            console.error('Error:', error);
        }
    }
};

export default Home;
