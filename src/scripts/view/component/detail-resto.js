class DetailResto extends HTMLElement {
    // connectedCallback() {
    //     this.render();
    // }

    set setDetailResto(dataResto) {
        this._dataResto = dataResto;
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="section-detail-resto padding-x-content">
				<div class="detail-resto">
					<div class="detail-resto__img">
						<img src="./images/heros/hero-image_4.jpg" alt="Foto resto" />
					</div>
					<div class="detail-resto__info-wrapper">
						<div class="info-wrapper__navigasi flex-row text-navy">
							<a href="./index.html" class="text-navy">Home</a>
							<span class="">/</span>
							<p class="">${this._dataResto.name}</p>
						</div>
						<div class="info-wrapper__rating-info flex-row">
							<span class="rating-info-angka text-white bg-blue">4.2</span>
							<p class="rating-info-word text-blue">Very Good</p>
							<p class="review-resto text-navy">10k Review</p>
						</div>
						<div class="info-wrapper__profile-resto">
							<h1 class="text-navy text-2xl">Phone Cafe</h1>
							<h2 class="text-navy text-lg">Western Resto'</h2>
							<p class="text-navy">Bali</p>
							<hr />
						</div>
						<div class="info-wrapper__desc-n-menu text-navy">
							<p class="desc-n-menu__paragraph">
								Menyajikan berbagai hidangan lezat untuk dinikmati
							</p>
							<div class="desc-n-menu__drink text-navy">
								<h2 class="text-lg">Daftar Minuman</h2>
								<p>
									Air Mineral, Kopi Hitam, Teh Hijau, Jus Jeruk, Susu Cokelat,
									Es Teh Manis, Soda Jeruk, Teh Tarik, Cappuccino, Es Kopi Susu
								</p>
							</div>
							<div class="desc-n-menu__food text-navy">
								<h2 class="text-lg">Daftar Makanan</h2>
								<p>
									Nasi Goreng, Mie Goreng, Ayam Goreng, Sushi, Pizza, Bubur
									Ayam, Nasi Padang, Sate Ayam, Lasagna, Bakso.
								</p>
							</div>
							<hr />
						</div>
						<div class="info-wrapper__ulasan-pengguna text-navy">
							<h2 class="text-lg">Ulasan</h2>
							<div class="ulasan-pengguna__wrapper-ulasan-form">
								<article class="ulasan-pengguna__wrapper-ulasan">
									<div class="wrapper-ulasan__name-star-date flex-col">
										<span class="name-star flex-row">
											<h3 class="username-reviewer">Ridho Ahmad Fauzi</h3>
											<span class="stars text-yellow">
												<i class="fa-solid fa-star"></i>
												<i class="fa-solid fa-star"></i>
												<i class="fa-solid fa-star"></i>
												<i class="fa-solid fa-star"></i>
												<i class="fa-regular fa-star"></i>
											</span>
										</span>
										<span class="name-star-date__date flex-row">
											<p class="strip">-</p>
											<p class="date-ulasan">14 Agustus 2023</p>
										</span>
									</div>
									<div class="wrapper-ulasan__user-review text-navy">
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Omnis consequatur ducimus quia libero nostrum excepturi
											dolorem eveniet architecto eos praesentium.
										</p>
									</div>
								</article>
								<article class="ulasan-pengguna__wrapper-ulasan">
									<div class="wrapper-ulasan__name-star-date flex-col">
										<span class="name-star flex-row">
											<h3 class="username-reviewer">Ridho Ahmad Fauzi</h3>
											<span class="stars text-yellow">
												<i class="fa-solid fa-star"></i>
												<i class="fa-solid fa-star"></i>
												<i class="fa-solid fa-star"></i>
												<i class="fa-solid fa-star"></i>
												<i class="fa-regular fa-star"></i>
											</span>
										</span>
										<span class="name-star-date__date flex-row">
											<p class="strip">-</p>
											<p class="date-ulasan">14 Agustus 2023</p>
										</span>
									</div>
									<div class="wrapper-ulasan__user-review text-navy">
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Omnis consequatur ducimus quia libero nostrum excepturi
											dolorem eveniet architecto eos praesentium.
										</p>
									</div>
								</article>
							</div>
							<div class="ulasan-pengguna__wrapper-form">
								<form class="form-ulasan-user flex-col" action="#">
									<input
										type="text"
										id="input-username"
										class="text-navy"
										title="Form nama pemberi ulasan"
										placeholder="Masukan Username"
									/>
									<input
										type="text"
										class="text-navy"
										id="input-review-resto"
										title="Form mengisi ulasan"
										placeholder="Masukan Ulasan"
									/>
									<button
										type="submit"
										class="text-white"
										id="btn-submit-review"
										title="Button submit form ulasan"
									>
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
        `;
    }
}

customElements.define('detail-resto', DetailResto);
