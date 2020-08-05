// Timer
    const deadLine = '2020-08-11'; // <----- set your dead-line date in this form!

    function getTimeRemeining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / (1000 * 60)) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function addZero (num) { // <----- the function adds "0" to show dates like this: "02" days, "09" hours...
        if (num >= 0 && num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

    function setTimer (selector, endTime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval =  setInterval(updateTimer, 1000);

        updateTimer();

        function updateTimer() {
            const t = getTimeRemeining(endTime);

            if (t.days === 1 || t.days === 21 || t.days === 31) {
                days.innerHTML = `<span>${addZero(t.days)}</span>день`;
            } else if ( (t.days > 1 && t.days < 5) || (t.days > 21 && t.days < 25) ) {
                days.innerHTML = `<span>${addZero(t.days)}</span>дня`;
            } else if ( (t.days > 4 && t.days < 21) || (t.days > 24 && t.days < 31) ) {
                days.innerHTML = `<span>${addZero(t.days)}</span>дней`;
            } 

            if (t.hours === 1 || t.hours === 21) {
                hours.innerHTML = `<span>${addZero(t.hours)}</span>час`;
            } else if ((t.hours > 1 && t.hours < 5) || (t.hours > 21 && t.hours < 25)) {
                hours.innerHTML = `<span>${addZero(t.days)}</span>часа`;
            } else if (t.hours > 4 && t.hours < 21) {
                hours.innerHTML = `<span>${addZero(t.hours)}</span>часов`;
            } 

            if (
                t.minutes === 1 || 
                t.minutes === 21 || 
                t.minutes === 31 ||
                t.minutes === 41 ||
                t.minutes === 51
                ) {
                minutes.innerHTML = `<span>${addZero(t.minutes)}</span>минута`;
            } else if ( 
                (t.minutes > 1 && t.minutes < 5) || 
                (t.minutes > 21 && t.minutes < 25) ||
                (t.minutes > 31 && t.minutes < 35) ||
                (t.minutes > 41 && t.minutes < 45) ||
                (t.minutes > 51 && t.minutes < 55)
                ) {
                minutes.innerHTML = `<span>${addZero(t.minutes)}</span>минуты`;
            } else if ( 
                (t.minutes > 4 && t.minutes < 21) || 
                (t.minutes > 24 && t.minutes < 31) ||
                (t.minutes > 34 && t.minutes < 41) ||
                (t.minutes > 44 && t.minutes < 51) ||
                (t.minutes > 54 && t.minutes < 60)
                ) {
                minutes.innerHTML = `<span>${addZero(t.minutes)}</span>минут`;
            } 

            if (
                t.seconds === 1 || 
                t.seconds === 21 || 
                t.seconds === 31 ||
                t.seconds === 41 ||
                t.seconds === 51
                ) {
                seconds.innerHTML = `<span>${addZero(t.seconds)}</span>секунда`;
            } else if ( 
                (t.seconds > 1 && t.seconds < 5) || 
                (t.seconds > 21 && t.seconds < 25) ||
                (t.seconds > 31 && t.seconds < 35) ||
                (t.seconds > 41 && t.seconds < 45) ||
                (t.seconds > 51 && t.seconds < 55)
                ) {
                seconds.innerHTML = `<span>${addZero(t.seconds)}</span>секунды`;
            } else if ( 
                (t.seconds > 4 && t.seconds < 21) || 
                (t.seconds > 24 && t.seconds < 31) ||
                (t.seconds > 34 && t.seconds < 41) ||
                (t.seconds > 44 && t.seconds < 51) ||
                (t.seconds > 54 && t.seconds < 60)
                ) {
                seconds.innerHTML = `<span>${addZero(t.seconds)}</span>секунд`;
            }

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setTimer('.timer', deadLine); // <----- first add your "Timer wrapper" selector
