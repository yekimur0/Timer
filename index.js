class Timer {
  nowTime = new Date().getTime();
  elDay = document.querySelector('#day');
  elHours = document.querySelector('#hours');
  elMinutes = document.querySelector('#minutes');
  elSecond = document.querySelector('#second');
  constructor(day, hours, minutes) {
    this.day = day;
    this.hours = hours;
    this.minutes = minutes;
  }

  init() {
    const endDate =
      this.nowTime + (this.day * 24 * 60 * 60 * 1000 + this.hours * 60 * 60 * 1000 + this.minutes * 60 * 1000);
    const updateTimer = () => {
      const currentTime = new Date().getTime();
      const difference = endDate - currentTime;

      const remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      const remainingHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const remainingMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const remainingSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      this.elDay.innerHTML = remainingDays + ' :';
      this.elHours.innerHTML = remainingHours + ' :';
      this.elMinutes.innerHTML = remainingMinutes + ' :';
      this.elSecond.innerHTML = remainingSeconds;

      if (difference > 0) {
        requestAnimationFrame(updateTimer);
      }
    };
    updateTimer();
  }
}

const copyTimer = new Timer(5, 5, 60);

copyTimer.init();
