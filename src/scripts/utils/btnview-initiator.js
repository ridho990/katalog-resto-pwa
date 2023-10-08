const HeaderInitiator = {
    init({ btnViewAll, wrapperCard, dataList }) {
        let btnActive = 0;
        btnViewAll.addEventListener('click', () => {
            if (btnActive === 0) {
                wrapperCard.innerHTML = '';
                renderResto(data.restaurants.length);
                btnViewAll.textContent = 'Lebih Sedikit';
                btnViewAll.title = 'Klik untuk dapat melihat lebih sedikit';
                btnActive--;
            } else {
                wrapperCard.innerHTML = '';
                renderResto();
                btnViewAll.textContent = 'Lihat Semua';
                btnViewAll.title = 'Klik untuk dapat melihat semua';
                btnActive++;
            }
        });
    }
};

export default HeaderInitiator;

const renderAllCard = () => {
    const wrapperCard = document.querySelector('.resto-populer__wrapper-card');
    const btnViewAll = document.querySelector('.resto-populer__btn-view');
    let btnActive = 0;
    btnViewAll.addEventListener('click', () => {
        if (btnActive === 0) {
            wrapperCard.innerHTML = '';
            renderResto(data.restaurants.length);
            btnViewAll.textContent = 'Lebih Sedikit';
            btnViewAll.title = 'Klik untuk dapat melihat lebih sedikit';
            btnActive--;
        } else {
            wrapperCard.innerHTML = '';
            renderResto();
            btnViewAll.textContent = 'Lihat Semua';
            btnViewAll.title = 'Klik untuk dapat melihat semua';
            btnActive++;
        }
    });
};
