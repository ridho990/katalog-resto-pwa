import API_ENDPOINT from '../global/api-endpoint';

class RestoApiSource {
    static showLoader() {
        const ldRing = document.querySelectorAll('.lds-ring');
        ldRing.forEach((item) => {
            item.style.display = 'inline-block';
        });
    }

    static hideLoader() {
        const ldRing = document.querySelectorAll('.lds-ring');
        ldRing.forEach((item) => {
            item.style.display = 'none';
        });
    }

    static async listResto() {
        return new Promise((resolve, reject) => {
            // Menampilkan loader
            this.showLoader();

            // Menunda respon selama 2 detik
            setTimeout(async () => {
                // Menyembunyikan loader
                this.hideLoader();

                const response = await fetch(API_ENDPOINT.LIST_RESTO);
                const responseJson = await response.json();
                const listResto = responseJson.restaurants.splice(0, 12);

                if (!listResto) {
                    reject(new Error('Gagal mengambil data dari server'));
                }

                resolve(listResto);
            }, 1000); // Menunda respon selama 1 detik
        });
    }

    static async detailResto(id) {
        return new Promise((resolve, reject) => {
            // Menampilkan loader
            this.showLoader();

            // Menunda respon selama 2 detik
            setTimeout(async () => {
                // Menyembunyikan loader
                this.hideLoader();

                const response = await fetch(API_ENDPOINT.DETAIL_RESTO(id));
                const responseJson = await response.json();
                const dataResto = responseJson.restaurant;

                if (!dataResto) {
                    reject(new Error('Gagal mengambil data dari server'));
                }

                resolve(dataResto);
            }, 1000); // Menunda respon selama 1 detik
        });
    }

    static async addReview(data) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const response = await fetch(API_ENDPOINT.ADD_REVIEW, options);
        const newListReview = await response.json();
        return newListReview.customerReviews;
    }
}

export default RestoApiSource;
