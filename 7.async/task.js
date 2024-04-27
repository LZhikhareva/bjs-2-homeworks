class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (time == null || callback == null) {
            throw new Error("Отсутствуют обязательные аргументы");
        }
        if (this.alarmCollection.some((alarm) => alarm.time === time)) {
            console.warn("Уже присутствует звонок на это же время");
        }

        this.alarmCollection.push({
            callback,
            time,
            canCall: true,
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time != time);
    }

    getCurrentFormattedTime() {
        let date = new Date();
        let hours = date.getHours().toLocaleString('ru-RU', {
            minimumIntegerDigits: 2
        });
        let minutes = date.getMinutes().toLocaleString('ru-RU', {
            minimumIntegerDigits: 2
        });
        return `${hours}:${minutes}`;
    }

    start() {
        if (this.intervalId == null) {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach((alarm) => {
                    if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                        alarm.canCall = false;
                        alarm.callback();
                    }
                }),
                    1000;
            })

        }
    }

    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}