import '../component/favorite-hero';
import '../component/favorite-wrapper';

const Favorite = {
    async render() {
        return `
        <favorite-hero></favorite-hero>
        <favorite-wrapper></favorite-wrapper>
    `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
    }
};

export default Favorite;
