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
            return console.error;
        } else {
            this.alarmCollection.push({
                id,
                time,
                callback
            });
        }
    }

    removeClock(id) {
        // const deletedId = this.alarmCollection.findIndex(item => item.id === id);
        // this.alarmCollection.splice(deletedId, 1); 
        this.alarmCollection.splice(this.alarmCollection.findIndex(item => item.id === id), 1);
        // Работает как закомментированный вариант, так и тот вариант, который сейчас.
    }

    getCurrentFormattedTime() {
        const time = new Date();
        const hours = time.getHours();
        const minutes = time.getMinutes();
        return (hours + ":" + minutes);
    }

    start(time, callback, id) {
        this.time = time;
        this.callback = callback;
        this.id = id;
        const now = new Date();
        const checkClock = () => {
            if (now === this.time) {
                return this.callback;
            }
        }   
        if (this.timerId === undefined) {
           this.timerId = setInterval(() => {
               this.alarmCollection.map(item => checkClock(item))
           }, 1000)
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