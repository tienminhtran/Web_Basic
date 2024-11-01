let count = 1;



function validateInput() {
    const seriFiled = document.getElementById("soseri");
    const seriValues = seriFiled.value;
    const seriregex = /[A-Z0-9_-]{6,}/;
    const serierror = document.getElementById("loi1");



    if (!seriregex.test(seriValues)) {
        serierror.innerHTML = "Số serial có thể gồm các ký tự chữ cái hoa, dấu _ và các ký số; chiều dài ít nhất là 6";
    } else {
        serierror.innerHTML = "";

    }

    const tlFiled = document.getElementById("trongluong");
    const tlValues = tlFiled.value;
    const tlerror = document.getElementById("loi4");

    if (parseFloat(tlValues) <= 0 || tlValues == "") {
        tlerror.innerHTML = "Trọng lượng là số > 0";
    } else {
        tlerror.innerHTML = "";
    }
    return seriregex.test(seriValues) && parseFloat(tlValues);
}

function calculatePhi(TL) {
    if (TL >= 1 && TL <= 20) {
        return TL * 35000;
    } else if (TL >= 21 && TL <= 50) {
        return TL * 30000;
    } else {
        return TL * 15000;
    }
}
const phiInput = document.getElementById("chiphi");

const trongluongInput = document.getElementById("trongluong");
trongluongInput.addEventListener("input", function () {
    const trongluong = trongluongInput.value;
    const tlerror = document.getElementById("loi4");
    if (trongluong <= 0 || trongluong == "") {
        tlerror.innerHTML = "Trọng lượng là số > 0";
        return;
    } else {
        const phi = calculatePhi(trongluong);
        phiInput.value = phi;
        tlerror.innerHTML = "";
    }

});
const form = document.getElementById('form');
form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateInput()) {
        const seriInput = document.getElementById("soseri");
        const motaInput = document.getElementById("mota");
        const hinhInput = document.getElementById("hinh");
        const trongluongInput = document.getElementById("trongluong");
        const phiInput = document.getElementById("chiphi");



        const seri = seriInput.value;
        const mota = motaInput.value;
        const hinh = hinhInput.files[0];
        // const hinhTen = hinh ? hinh.name : "";

        const hinhDuongDan = hinh ? hinh.webkitRelativePath : "";
        const hinhTen = hinh ? hinh.name : "";

        const trongluong = parseFloat(trongluongInput.value);
        const phi = calculatePhi(trongluong);


        const row = tables.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);


        cell1.innerHTML = count++;
        cell2.innerHTML = seri;
        cell3.innerHTML = mota;
        cell4.innerHTML = hinhDuongDan + hinhTen;
        // cell4.innerHTML = hinhTen;
        cell5.innerHTML = trongluong;
        cell6.innerHTML = phi;
        // Reset input values
        // seriInput.value = '';
        // motaInput.value = '';
        // hinhInput.value = '';
        // trongluongInput.value = '';
        // phiInput.value = '';


    }
    //đóng 
    $("#mymodal").modal("hide"); // Đóng form
    $("#mymodal").on("hidden.bs.modal", function () {
        $(this).modal("dispose"); // Loại bỏ hoàn toàn modal khỏi DOM
    });

})