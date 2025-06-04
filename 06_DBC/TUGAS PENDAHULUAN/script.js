class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 100) {
            throw new Error("Judul tidak boleh kosong dan maksimal 100 karakter");
        }
        this.id = Math.floor(10000 + Math.random() * 90000); // ID 5 digit random
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        if (count > 10000000) {
            throw new Error("Maksimum play count adalah 10 juta per kali tambah");
        }
        if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
            throw new Error("Play count melebihi batas maksimum angka di JavaScript");
        }
        this.playCount += count;
    }

    printVideoDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

// Testing
const video = new SayaTubeVideo("Tutorial Design By Contract – [MARSELLA DWI JULIANTI]");
video.increasePlayCount(5000);
video.printVideoDetails();

// Testing exception handling
try {
    const invalidVideo = new SayaTubeVideo(""); // Judul kosong (error)
} catch (error) {
    console.error("Error:", error.message);
}

const testVideo = new SayaTubeVideo("Video Uji Coba");

try {
    for (let i = 0; i < 1000; i++) { // Uji overflow
        testVideo.increasePlayCount(10000000);
    }
} catch (error) {
    console.error("Error:", error.message);
}

testVideo.printVideoDetails();
