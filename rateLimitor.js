const { time } = require("console");
const Queue = require("./Queue");

class RateLimitor {
  constructor(maxRequests, timeWindow) {
    this.queue = new Queue();
    this.maxRequests = maxRequests;
    this.timeWindow = timeWindow;
  }
  allowRequest() {
    const now = Date.now();
    console.log(
      this.queue.isEmpty(),
      now,
      this.queue.peek(),
      now - this.queue.peek(),
      this.timeWindow
    );
    while (!this.queue.isEmpty() && now - this.queue.peek() > this.timeWindow) {
      console.log("condition passed");
      this.queue.dequeue();
    }
    if (this.queue.size() < this.maxRequests) {
      this.queue.enqueue(now);
      return true;
    } else {
      return false;
    }
  }
}

module.exports = RateLimitor;
