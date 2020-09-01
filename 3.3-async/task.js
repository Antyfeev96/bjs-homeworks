class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock (time, callback, id) {
        this.time = time;
        this.callback = callback;
        this.id = id;

        if (this.id === undefined) {
            throw new Error('Нет заданного id');
        } else if (this.alarmCollection.find(item => item.id === this.id) !== undefined) {
            return console.error("Будильник с таким ID уже существует");
        } else {
            this.alarmCollection.push({
                id,
                time,
                callback
            });
        }
    }

    removeClock(id) {
        const deletedId = this.alarmCollection.findIndex(item => item.id === id);
        this.alarmCollection.splice(deletedId, 1); 
    }

    getCurrentFormattedTime() {
        const time = new Date();
        let hours = time.getHours();
        let newHours = hours.toString();
        if (newHours.length == 1) {
            newHours = "0" + newHours;
        }
        let minutes = time.getMinutes();
        let newMinutes = minutes.toString();
        if (newMinutes.length == 1) {
            newMinutes = "0" + newMinutes;
        }
        return (newHours + ":" + newMinutes);
    }

    start() {
        const now = this.getCurrentFormattedTime();
        const checkClock = () => {
            if (this.timerId === undefined) {
                this.timerId = setInterval(() => {
                    this.alarmCollection.map(item => checkClock(item))
                }, 1000)
             }
             return this.alarmCollection.map(item => now === item.time);
        }   
        
        checkClock();
    }

    stop() {
        if (this.timerId !== undefined) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(item => console.log(item.id, item.time))
    }

    clearAlarms() {
        clearInterval(this.timerId);
        this.alarmCollection = [];
    }

}


const testCase = () => {
const newAlarm = new AlarmClock();

newAlarm.addClock("19:46", () => console.log("Первый будильник"), 1);

newAlarm.addClock("19:47", () => { 
    console.log("Второй будильник");
    newAlarm.removeClock(2);
}, 2)

newAlarm.addClock("19:48", () => {
    console.log("Третий будильник, пора бы проснуться");
    newAlarm.printAlarms();
    newAlarm.clearAlarms();
    newAlarm.printAlarms();
}, 3);

newAlarm.addClock("19:49", () => console.log("Четвертый будильник"), 1);

newAlarm.printAlarms()

newAlarm.start();

newAlarm.stop();
}
