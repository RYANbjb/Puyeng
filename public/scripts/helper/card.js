class Table extends Render{
    static tableEl = "";

    constructor(){
        super();
    }

    init(el){
        el.innerHTML +=
            `<table id="table" class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Manufaktur</th>
                        <th scope="col">Transmisi</th>
                        <th scope="col">Tahun</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <div class="col-md-3">
                    <div class="card mb-3">
                        <div class="card-body">
                            <img src="" alt="">
                            <h6 class="card-subtitle m-2"></h6>
                            <h6 class="card-subtitle m-2">Mobil Lengkap</h6>
                            <p class="card-text mx-2">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                                terawat</p>
                        </div>
                    </div>
                </div>
          `
        
        this.tableEl = document.getElementById('table')
    }
    renderBody(data){
        // const tbody = this.tableEl.childNodes[3];
        const tbody = this.tableEl.querySelector('tbody');
        let result = "";
        for(let i = 0; i < data.length; i++){
            result +=`<div>
                <td>${i+1}</td>
                <img>${data[i].image}</img>
                <h5>${data[i].manufacture}</h5>
                <h6>${data[i].rentPerDay}</h6>
                <td>${data[i].tahun}</td>
            </div>`
        }
        tbody.innerHTML = result;
    }
}