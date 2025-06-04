class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        this.timestamp = new Date();
        Singleton.instance = this;
    }

    getTime() {
        return this.timestamp;
    }
}

// MAIN
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log("Instance 1:", instance1.getTime());
console.log("Instance 2:", instance2.getTime());

console.log("Apakah sama instance?", instance1 === instance2);
