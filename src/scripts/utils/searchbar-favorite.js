const searchBarFavorite = {
    init(searchBar) {
        console.log(searchBar);
        this.searchCard(searchBar);
    },

    getAllTitle() {
        return document.querySelectorAll('.profile-resto__name-resto');
    },

    getAllCity() {
        return document.querySelectorAll('.profile-resto__city-resto');
    },

    searchCard(searchBar) {
        const allTitle = this.getAllTitle();
        const allCity = this.getAllCity();
        const cardResto = document.querySelectorAll('.card-info-resto');
        searchBar.addEventListener('input', (event) => {
            const value = event.target.value.toLowerCase();
            for (let index = 0; index < allCity.length; index++) {
                const isVisible =
                    allTitle[index].innerText.toLowerCase().includes(value) ||
                    allCity[index].innerText.toLowerCase().includes(value);
                cardResto[index].classList.toggle('hidden', !isVisible);
            }
        });
    }
};

export default searchBarFavorite;

// searchInput.addEventListener('input', (e) => {
//     const containerBuku = document.querySelectorAll('.card-book');
//     const judulBuku = document.querySelectorAll('.card-title');
//     const penulis = document.querySelectorAll('.card-author');
//     const value = e.target.value.toLowerCase();

//     for (let i = 0; i < containerBuku.length; i++) {
//         let isVisible =
//             judulBuku[i].innerText.toLowerCase().includes(value) ||
//             penulis[i].innerText.toLowerCase().includes(value);
//         containerBuku[i].classList.toggle('hidden', !isVisible);
//     }
// });
