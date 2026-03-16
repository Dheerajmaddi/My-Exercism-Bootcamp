export class SplitSecondStopwatch {
  constructor() {
    this.currentState = 'ready';
    this.elapsedTime = 0;
    this.laps = [];
  }

  get state() {
    return this.currentState;
  }

  get currentLap() {
    return this.fromSeconds(this.elapsedTime);
  }

  get total() {
    let totalPreviousTime = this.laps.reduce((sum, current) => sum + this.toSeconds(current), 0);
    return this.fromSeconds(this.elapsedTime + totalPreviousTime);
  }

  get previousLaps() {
    return [...this.laps];
  }

  start() {
    if (this.state === 'running') throw new Error('cannot start an already running stopwatch.');
    this.currentState = 'running';
  }

  stop() {
    switch(this.state) {
      case 'ready':
      case 'stopped':
        throw new Error('cannot stop a stopwatch that is not running');
      default:
        this.currentState = 'stopped';
    }
  }

  lap() {
    switch(this.state) {
      case 'ready':
      case 'stopped':
        throw new Error('cannot lap a stopwatch that is not running');
      default:
        this.laps.push(this.fromSeconds(this.elapsedTime));
        this.elapsedTime = 0;
    }
  }

  reset() {
    if(this.state === 'ready' || this.state === 'running') throw new Error('cannot reset a stopwatch that is not stopped');
    this.currentState = 'ready';
    this.elapsedTime = 0;
    this.laps = [];
  }

  // 1. String to Seconds: "01:02:03" -> 3723
  toSeconds(timeStr) {
    const [h, m, s] = timeStr.split(':').map(Number);
    return h * 3600 + m * 60 + s;
  };
  
  // 2. Seconds to String: 3723 -> "01:02:03"
  fromSeconds(totalSeconds) {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    
    // padStart ensures "5" becomes "05"
    const pad = (num) => num.toString().padStart(2, '0');
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
  };

  advanceTime(duration) {
    if (this.state === 'running') this.elapsedTime += this.toSeconds(duration);
  }
}
