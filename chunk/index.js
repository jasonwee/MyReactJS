function chunk (items, size) {
  const chunks = [];
  items = [].concat(...items);

  while (items.length) { chunks.push(items.splice(0, size)); }

  return chunks;
}

async function ProcessDevice(device) {  
  try {
    const url = "http://localhost:3001"
    await fetch(url, { signal: AbortSignal.timeout(2000) });
    return device;
  } catch (e) {
      //console.log(e)
      //console.log(e.name)
      if (e.name === "TimeoutError") {
        console.log('1000 ms timeout');
      } else if (e.name === "AbortError") {
        console.log("Fetch aborted by user action (browser stop button, closing tab, etc.",);
      } else if (e.name === "TypeError") {
        console.log("AbortSignal.timeout() method is not supported");
      } else {
        // A network error, or some other problem.
        console.log(`Error: type: ${e.name}, message: ${e.message}`);
      }
      throw e;
  }
}


const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
               'a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1', 'i1',
               'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2', 'i2',
               'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3', 'i3'
              ]
var jobArray = chunk(items,5); 
for (let i = 0; i < jobArray.length; i++) {
    Promise
    .allSettled(jobArray[i].map(ja => ProcessDevice(ja)))
    .then(function(results) { 
      for (const result of results) {
        if (result.status == "fulfilled")
          console.log(result.status + "=>" + result.value); 
        else
          console.log(result.status + "=>" + result.reason); 
      }
    })
    .catch((err) => {
       console.log("error: " + err);
    });
}




