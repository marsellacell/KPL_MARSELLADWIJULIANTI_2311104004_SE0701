function CariTandaBilangan(a) {
    if (a < 0) return "Negatif";
    if (a > 0) return "Positif";
    return "Nol";
}

function cekBilangan() {
    const input = document.getElementById("inputBilangan").value;
    const hasil = CariTandaBilangan(parseInt(input));
    document.getElementById("hasilOutput").innerText = hasil;
}
