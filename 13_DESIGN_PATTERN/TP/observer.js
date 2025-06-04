// Subject
class Subject {
    constructor() {
        this.observers = [];
        this.state = '';
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify() {
        this.observers.forEach(observer => observer.update(this.state));
    }

    setState(newState) {
        console.log(`Subject: Mengubah state ke "${newState}"`);
        this.state = newState;
        this.notify();
    }
}

// Observer
class Observer {
    constructor(name) {
        this.name = name;
    }

    update(state) {
        console.log(`${this.name} menerima notifikasi: ${state}`);
    }
}

// MAIN
const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.subscribe(observer1);
subject.subscribe(observer2);

// Simulasi perubahan state
subject.setState("Tugas Observer sudah selesai.");
