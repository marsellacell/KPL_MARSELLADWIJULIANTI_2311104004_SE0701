class HaloGeneric {
    sapaUser(user) {
        console.log(`Halo user ${user}`);
    }
}

const halo = new HaloGeneric();
halo.sapaUser("Marsell"); // Ganti dengan nama panggilan praktikan

class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    printData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

const dataGeneric = new DataGeneric("2311104004"); // Ganti dengan NIM praktikan
dataGeneric.printData();