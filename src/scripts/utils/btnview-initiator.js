const BtnViewInitiator = {
    init({ btnViewAll, wrapperCard, dataList }) {
        let btnActive = 0;
        console.log(dataList);
        btnViewAll.addEventListener('click', () => {
            if (btnActive === 0) {
                wrapperCard.innerHTML = '';
                this._renderResto(dataList, wrapperCard, 12);
                btnViewAll.textContent = 'Lebih Sedikit';
                btnViewAll.title = 'Klik untuk dapat melihat lebih sedikit';
                btnActive--;
            } else {
                wrapperCard.innerHTML = '';
                this._renderResto(dataList, wrapperCard, 3);
                btnViewAll.textContent = 'Lihat Semua';
                btnViewAll.title = 'Klik untuk dapat melihat semua';
                btnActive++;
            }
        });
    },

    _renderResto(listResto, wrapperCard, totalResto) {
        for (const index in listResto) {
            if (index < totalResto) {
                const cardResto = document.createElement('card-resto');
                cardResto.cardData = listResto[index];
                wrapperCard.appendChild(cardResto);
            }
        }

        // dataResto.forEach((resto) => {
        //     const cardResto = document.createElement('card-resto');
        //     cardResto.cardData = resto;
        //     wrapperCard.appendChild(cardResto);
        // });
    }
};

export default BtnViewInitiator;
