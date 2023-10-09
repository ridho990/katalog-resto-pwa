class FavoriteWrapper extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="favorite padding-x-content padding-y-content">
				<div class="favorite__wrapper">
					<div class="wrapper__search-favorite flex-row">
						<input
							type="search"
							name="search"
							id="search-favorite"
							placeholder="Cari resto favorit"
						/>
					</div>
					<div class="wrapper-card-favorite">
						<article class="card-info-resto">
							<div class="card-info-resto__img">
								<img src="./images/info/info-img-4.jpg" alt="Foto Resto" />
							</div>
							<div class="card-info-resto__bottom">
								<a
									href="#"
									class="card-info-resto__navigasi"
									title="Menuju halaman resto "
								>
									<div class="card-info-resto__rating-info flex-row">
										<span class="rating-resto-angka text-white bg-blue"
											>4.2</span
										>
										<p class="rating-resto-word text-blue">Very Good</p>
										<p class="review-resto text-navy">10k Review</p>
									</div>
									<div class="card-info-resto__profile-resto">
										<h3 class="text-navy text-2xl">Phone Cafe</h3>
										<h4 class="text-navy text-lg">Western Resto'</h4>
										<p class="text-navy">Bali</p>
										<hr />
									</div>
									<p class="card-info-resto__description text-navy">
										Menyajikan berbagai hidangan lezat untuk dinikmati
									</p>
								</a>
							</div>
						</article>
						<article class="card-info-resto">
							<div class="card-info-resto__img">
								<img src="./images/info/info-img-4.jpg" alt="Foto Resto" />
							</div>
							<div class="card-info-resto__bottom">
								<a
									href="#"
									class="card-info-resto__navigasi"
									title="Menuju halaman resto "
								>
									<div class="card-info-resto__rating-info flex-row">
										<span class="rating-resto-angka text-white bg-blue"
											>4.2</span
										>
										<p class="rating-resto-word text-blue">Very Good</p>
										<p class="review-resto text-navy">10k Review</p>
									</div>
									<div class="card-info-resto__profile-resto">
										<h3 class="text-navy text-2xl">Phone Cafe</h3>
										<h4 class="text-navy text-lg">Western Resto'</h4>
										<p class="text-navy">Bali</p>
										<hr />
									</div>
									<p class="card-info-resto__description text-navy">
										Menyajikan berbagai hidangan lezat untuk dinikmati
									</p>
								</a>
							</div>
						</article>
						<article class="card-info-resto">
							<div class="card-info-resto__img">
								<img src="./images/info/info-img-4.jpg" alt="Foto Resto" />
							</div>
							<div class="card-info-resto__bottom">
								<a
									href="#"
									class="card-info-resto__navigasi"
									title="Menuju halaman resto "
								>
									<div class="card-info-resto__rating-info flex-row">
										<span class="rating-resto-angka text-white bg-blue"
											>4.2</span
										>
										<p class="rating-resto-word text-blue">Very Good</p>
										<p class="review-resto text-navy">10k Review</p>
									</div>
									<div class="card-info-resto__profile-resto">
										<h3 class="text-navy text-2xl">Phone Cafe</h3>
										<h4 class="text-navy text-lg">Western Resto'</h4>
										<p class="text-navy">Bali</p>
										<hr />
									</div>
									<p class="card-info-resto__description text-navy">
										Menyajikan berbagai hidangan lezat untuk dinikmati
									</p>
								</a>
							</div>
						</article>
					</div>
				</div>
			</section>
        `;
    }
}

customElements.define('favorite-wrapper', FavoriteWrapper);
