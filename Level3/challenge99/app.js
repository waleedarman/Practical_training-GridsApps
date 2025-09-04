// Redis token bucket
const RATE = 1;   
const BURST = 10; 

function handleRequest(ip) {
  let bucket = redis.get(ip) || { tokens: BURST, lastRefill: Date.now() };

  // refill
  const now = Date.now();
  const delta = (now - bucket.lastRefill) / 1000;
  bucket.tokens = Math.min(BURST, bucket.tokens + delta * RATE);
  bucket.lastRefill = now;

  if (bucket.tokens < 1) return 429; 

  bucket.tokens -= 1;
  redis.set(ip, bucket);
  return 200;
}
