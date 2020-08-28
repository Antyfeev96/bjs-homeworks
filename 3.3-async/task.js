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
        } else if (this.timerId === this.id) {
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
        this.id = id;
        const deletedId = this.alarmCollection.filter(item => item.id === this.id);
        this.alarmCollection.map(item => {
            if (deletedId[0] === item.id) {
                this.alarmCollection.splice(deletedId[0], 1);
                return true;
            } else {
                return false;
            }
        })

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