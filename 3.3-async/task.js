class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock (time, callback, id) {
        if (id === undefined) {
            throw new Error('Нет заданного id');
        } else if (this.alarmCollection.find(item => item.id === id)) {
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
        if (this.alarmCollection.find(item => item.id === id)) {
            this.alarmCollection.splice(this.alarmCollection.findIndex(item => item.id === id), 1)
            return true;
        } else {
            return false;
        }
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
        const checkClock = (alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.callback(); 
            }  
        }

        if (!this.timerId) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(item => checkClock(item))
            }, 1000)}
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(item => console.log(item.id, item.time))
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}



 testCase = () => {
const newAlarm = new AlarmClock();

newAlarm.addClock("20:59", () => console.log("Первый будильник"), 1);

newAlarm.addClock("21:00", () => { 
    console.log("Второй будильник");
    newAlarm.removeClock(2);
}, 2)

newAlarm.addClock("21:01", () =>  {
    console.log("Третий будильник, пора бы проснуться");
    newAlarm.clearAlarms();
    newAlarm.printAlarms();
}, 3);

newAlarm.addClock("21:01", () => console.log("Четвертый будильник"), 2);

newAlarm.printAlarms()

newAlarm.start();

 }
