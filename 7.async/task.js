//1
class AlarmClock {

    constructor(timerId = null) {
        this.timerId = timerId;
        this.alarmCollection = [];
    }

    addClock(time = 'HH:MM', callback, id) {
        if ((id === undefined)) {
            throw new Error('Невозможно идентифицировать будильник, отсутствует id')
        }
        if (this.alarmCollection.some (item => item.id === id)) {
            console.error('In collection')
            return
        }
        callback = () => {

        }
        this.alarmCollection.push({time,callback, id})
    }

    removeClock(id) {
        if (this.alarmCollection.some((item => item.id === id))) {
            this.alarmCollection.pop()
            return true
        }
        else {
            return false
        }
    }

    getCurrentFormattedTime () {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return `${hours}:${minutes}`
    }

    start() {
        let checkCLock = (item) => {
            if (  this.getCurrentFormattedTime() === item.time  ) {
                return item.callback()
            }
        }
        if(this.timerId === null) {
            this.timerId = setInterval(() =>this.alarmCollection.forEach(item => checkCLock(item) ) )
        }

    }

    printAlarms () {
       this.alarmCollection.forEach( item => console.log(`Будильник №${item.id} заведён на ${item.time}`))
    }

    stop () {
        if (this.timerId !== null) {
            clearInterval(this.timerId)
            this.timerId = null
        }
    }

    clearAlarms () {
       clearInterval(this.timerId)
       this.alarmCollection = [];
    }
}

//2

let tearsOfTime = new AlarmClock() //lost in light (c) Crematory
function testCase () {
    tearsOfTime.addClock('21:30', () =>  console.log("Вставай 1"), 1)
    tearsOfTime.addClock('21:31', () => { console.log("Вставай 2"); tearsOfTime.removeClock(2) }, 2)
    tearsOfTime.addClock('21:32', () =>  console.log("Вставай 3"));
    tearsOfTime.addClock('21:35', () => {
        console.log("Вставай 3");
        tearsOfTime.clearAlarms();
        tearsOfTime.printAlarms();
    }, 3);
    tearsOfTime.addClock('21:36', () =>  console.log("Вставай 4"), 1)
    tearsOfTime.printAlarms()
    tearsOfTime.start()
    console.log(tearsOfTime.alarmCollection)
}

testCase();
