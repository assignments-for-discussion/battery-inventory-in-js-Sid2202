const assert = require('assert');

//Adjust the ratedCapacities of the battery as required
const ratedCapacities = 120;

function countBatteriesByHealth(presentCapacities) {

  var healthy=0, exchange =0, failed = 0;
  var SoH =[]

  for(i = 0; i < presentCapacities.length; i++) {
  
    //Calculating the SoH of the battery
    if(ratedCapacities !== 0){
    SoH[i] = 100 * (presentCapacities[i] / ratedCapacities);
    }else{return;}

    //Classifying the battery based on its SoH
    if(SoH[i] > 80 && SoH[i] <= 100){
      healthy++;
    }else if(SoH[i] <= 80 && SoH[i] > 65){
      exchange++;
    }else{
      failed++;
    }

  }
  return {
    healthy: healthy,
    exchange: exchange,
    failed: failed
  };
}

function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [115, 118, 80, 95, 91, 77];
  counts = countBatteriesByHealth(presentCapacities);

  //Handle assertion errors
  try {
    assert(counts["healthy"] == 2);
    assert(counts["exchange"] == 3);
    assert(counts["failed"] == 1);
    console.log("Done counting :)");
  }catch (AssertionError) {
    console.log('Assertion failed');
  } 

  //Print the results
  console.log('Hence, the batteries are bucketed as follows:');
  console.log('Healthy: ' + counts["healthy"]);
  console.log('Exchange: ' + counts["exchange"]);
  console.log('Failed: ' + counts["failed"]);
}

testBucketingByHealth();
