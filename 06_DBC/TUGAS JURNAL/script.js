// SayaTubeVideo class
class SayaTubeVideo {
    constructor(title) {
        // Precondition checks
        if (typeof title !== "string" || title.length === 0 || title.length > 200) {
            throw new Error("Judul video tidak valid (harus string, tidak null, dan max 200 karakter).");
        }

        this.id = Math.floor(10000 + Math.random() * 90000); // Generate random 5-digit ID
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        // Precondition checks
        if (typeof count !== "number" || count < 0 || count > 25000000) {
            throw new Error("Jumlah playCount tidak valid (harus angka positif dan max 25 juta).");
        }

        // Check integer overflow
        if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
            throw new Error("Jumlah playCount melebihi batas maksimum integer.");
        }

        this.playCount += count;
    }

    printVideoDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Judul: ${this.title}`);
        console.log(`Jumlah Penayangan: ${this.playCount}`);
    }
}

// SayaTubeUser class
class SayaTubeUser {
    constructor(username) {
        // Precondition checks
        if (typeof username !== "string" || username.length === 0 || username.length > 100) {
            throw new Error("Username tidak valid (harus string, tidak null, dan max 100 karakter).");
        }

        this.username = username;
        this.uploadedVideos = [];
    }

    addVideo(video) {
        // Precondition checks
        if (!(video instanceof SayaTubeVideo)) {
            throw new Error("Video yang ditambahkan harus instance dari SayaTubeVideo.");
        }
        if (video.playCount > Number.MAX_SAFE_INTEGER) {
            throw new Error("Play count video melebihi batas maksimum integer.");
        }

        this.uploadedVideos.push(video);
    }

    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    printAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        for (let i = 0; i < Math.min(this.uploadedVideos.length, 8); i++) {
            console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
        }
    }
}

// Testing program
try {
    let user = new SayaTubeUser("MARSELLA DWI JULIANTI");

    let videoTitles = [
        "Review Film Interstellar oleh Marsell",
        "Review Film Inception oleh Marsell",
        "Review Film The Dark Knight oleh Marsell",
        "Review Film Parasite oleh Marsell",
        "Review Film Whiplash oleh Marsell",
        "Review Film The Godfather oleh Marsell",
        "Review Film Pulp Fiction oleh Marsell",
        "Review Film The Shawshank Redemption oleh Marsell",
        "Review Film Fight Club oleh Marsell",
        "Review Film La La Land oleh Marsell"
    ];

    // Tambahkan video ke user
    videoTitles.forEach(title => {
        let video = new SayaTubeVideo(title);
        video.increasePlayCount(Math.floor(Math.random() * 25000000)); // Simulasi playCount random
        user.addVideo(video);
    });

    // Cetak semua video milik user
    user.printAllVideoPlaycount();

    // Coba print detail salah satu video
    user.uploadedVideos[0].printVideoDetails();

} catch (error) {
    console.error("Error:", error.message);
}
