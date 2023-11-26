
    document.addEventListener("DOMContentLoaded", function () {
        const cardContainer = document.getElementById("cardContainer");
        const formItem = document.getElementById("formitem");
        const keywordInput = document.getElementById("keyword");

        var items = [
            { id: '001', name: 'Tugas Tabel', description: 'membuat sebuah tabel kehadiran siswa', image: 'foto1.jpeg', href: 'https://achmadadji.github.io/Tugas-Tabel/' },
            { id: '002', name: 'Tugas Form', description: 'membuat sebuah form login', image: 'foto4.jpeg', href:'https://achmadadji.github.io/tugas-pwb-form/'},
            { id: '003', name: 'Tugas CSS', description: 'menambahkan CSS pada HTML', image: 'foto2.jpeg', href:'https://achmadadji.github.io/tugas-pwb-css/'},
            { id: '004', name: 'Tugas Bootstrap dan DOM', description: 'menambahkan DOM untuk pencarian dan Bootstrap untuk card', image: 'foto3.jpeg', href: 'https://achmadadji.github.io/tugas-boostrap/' }
        ];

        function renderCard(item) {
            const card = document.createElement("div");
            card.classList.add("col-md-4", "mt-3");
            card.innerHTML = `
              <div class="card">
                <img src="IMG/${item.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${item.name}</h5>
                  <p class="card-text">${item.description}</p>
                  <a href="${item.href}" class="btn btn-primary">Lihat Detail</a>
                </div>
              </div>
            `;
            cardContainer.appendChild(card);
        }
        

        function renderCards(items) {
            cardContainer.innerHTML = "";
            items.forEach(item => {
                renderCard(item);
            });
        }

        function searchItems(keyword) {
            const filteredItems = items.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));
            renderCards(filteredItems);
        }

        formItem.addEventListener("submit", function (e) {
            e.preventDefault();
            const keyword = keywordInput.value;
            searchItems(keyword);
        });

        renderCards(items);
    });
