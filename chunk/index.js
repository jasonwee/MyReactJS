const processRequest = (url, timeout = 3000) => {
      return Promise.race([
        fetch(url),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('timeout')), timeout)
        )
    ]);
}

const chunk = (items, size = 5) => {
    const chunks = [];
    items = [].concat(...items);

    while (items.length) { chunks.push(items.splice(0, size)); }

    return chunks;
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

const doBatch = async (jobArray, i, jobTimeout) => {
            let j = 0
            const results = await Promise.allSettled(jobArray[i].map(job => processRequest(job, jobTimeout)))
            for (const result of results) {
               if (result.status === 'fulfilled') {
                   const data = await result.value.json();
                   console.log(`${jobArray[i][j]} = ${JSON.stringify(data)}`);
                   j+=1
               } else {
                   //console.log(result.reason);
                   console.log(`${jobArray[i][j]} = bad`);
                   j+=1
               }
            }
}


/* chunkSize should not be a huge numbers so it wont hammer api server */
/* jobTimeout should always less than delaybetweenchunk so batches of calls dont overlap */
const batchProcessing = async (requests, chunkSize = 3, jobTimeout = 3000, delayBetwenChunk = 4000) => {
    
    let jobArray = chunk(requests, chunkSize);
    
    for (let i = 0; i < jobArray.length; i++) {
       if (i == 0)
           await doBatch(jobArray, i, jobTimeout)
       else
           await delay(delayBetwenChunk).then(() => {
               console.log("==========")
               console.log("sleep done")
               console.log("==========")
               doBatch(jobArray, i, jobTimeout)
            }  ) 
    }
}

const items = ['http://localhost:3001/sample/1', 'http://localhost:3001/sample/2', 'http://localhost:3001/sample/3', 'http://localhost:3001/sample/4',
               'http://localhost:3001/sample/5', 'http://localhost:3001/sample/6', 'http://localhost:3001/sample/7', 'http://localhost:3001/sample/8',
               'http://localhost:3001/sample/9', 'http://localhost:3001/sample/10', 'http://localhost:3001/sample/11', 'http://localhost:3001/sample/12',
               'http://localhost:3001/sample/13', 'http://localhost:3001/sample/14', 'http://localhost:3001/sample/15', 'http://localhost:3001/sample/16',
               'http://localhost:3001/sample/17', 'http://localhost:3001/sample/18', 'http://localhost:3001/sample/19', 'http://localhost:3001/sample/20',
               'http://localhost:3001/sample/21', 'http://localhost:3001/sample/22', 'http://localhost:3001/sample/23', 'http://localhost:3001/sample/24',
               'http://localhost:3001/sample/25', 'http://localhost:3001/sample/26', 'http://localhost:3001/sample/27', 'http://localhost:3001/sample/28',
               'http://localhost:3001/sample/29', 'http://localhost:3001/sample/30', 'http://localhost:3001/sample/31', 'http://localhost:3001/sample/32',
               'http://localhost:3001/sample/33', 'http://localhost:3001/sample/34', 'http://localhost:3001/sample/35', 'http://localhost:3001/sample/36',
               'http://localhost:3001/sample/37', 'http://localhost:3001/sample/38', 'http://localhost:3001/sample/39', 'http://localhost:3001/sample/40',
               'http://localhost:3001/sample/41', 'http://localhost:3001/sample/42', 'http://localhost:3001/sample/43', 'http://localhost:3001/sample/44',
               'http://localhost:3001/sample/45', 'http://localhost:3001/sample/46', 'http://localhost:3001/sample/47', 'http://localhost:3001/sample/48',
               'http://localhost:3001/sample/49', 'http://localhost:3001/sample/50', 'http://localhost:3001/sample/51', 'http://localhost:3001/sample/52',
               'http://localhost:3001/sample/53', 'http://localhost:3001/sample/54', 'http://localhost:3001/sample/55', 'http://localhost:3001/sample/56'
              ]

batchProcessing(items, 10, 3000, 4000);
