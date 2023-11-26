document.addEventListener("DOMContentLoaded", function () {
    const listBarang = document.getElementById("listBarang");
    const formItem = document.getElementById("formItem");
    const keywordInput = document.getElementById("keyword");
    let totalBarangDiKeranjang = 0;

var items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap', 'logitek.jpg'], 
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg']
    ]
    function Cari(keyword) {
        listBarang.innerHTML = "";
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item[1].toLowerCase().includes(keyword.toLowerCase())) {
                const card = document.createElement("div");
                card.classList.add("col-4", "mt-1" );
                card.innerHTML = `
                    <div class ="col-4 mt-5"> 
                        <div class="card" style="width: 18rem;">
                            <img src="assets/${item[4]}" class="card-img-top" height="220px" width="200px" alt="...">
                            <div class="card-body">
                                <h5 class="card-title" id="itemName">${item[1]}</h5>
                                <p class="card-text" id="itemDesc">${item[3]}</p>
                                <p class="card-text">Rp ${item[2]}</p>
                                <a href="#" class="btn btn-primary add-to-cart" data-id="${item[0]}">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                `;
                listBarang.appendChild(card);
            }
        }
    }
});