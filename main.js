const assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
  return {
    healthy: 0,
    exchange: 0,
    failed: 0
  };
}

function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [115, 118, 80, 95, 91, 77];
  counts = countBatteriesByHealth(presentCapacities);
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);
  console.log("Done counting :)");
}

testBucketingByHealth();
