import API_ENDPOINT from '../global/api-endpoint';

class RestoApiSource {
    static showLoader() {
        const ldRing = document.querySelector('.lds-ring');
        ldRing.style.display = 'inline-block';
    }

    static hideLoader() {
        const ldRing = document.querySelector('.lds-ring');
        ldRing.style.display = 'none';
    }

    // static async listResto() {
    //     const response = await fetch(API_ENDPOINT.LIST_RESTO);
    //     const responseJson = await response.json();
    //     const listResto = responseJson.restaurants.splice(0, 12);
    //     return listResto;
    // }

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
            }, 2000); // Menunda respon selama 2 detik
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
            }, 2000); // Menunda respon selama 2 detik
        });
        // console.log(id);
        // const response = await fetch(API_ENDPOINT.DETAIL_RESTO(id));
        // const dataResto = await response.json();
        // return dataResto.restaurant;
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
        return response.json();
    }
}

export default RestoApiSource;
