// Async Await

let newPromise = new Promise((fulfilled, failure) => {
  let dataReceived = false;

  if (dataReceived) {
    fulfilled("Data Fetched Successfully");
  } else {
    // failure("Data Not Found");
    throw new Error("Search Proper Data")
  }
});

// newPromise.then((message)=>{
//     console.log(message)
// })

async function executePromise() {
  try {
    let message = await newPromise;

    let newMessage = await newPromise;
    console.log(message);
    console.log(`Next Message: ${newMessage}`)
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("End");
  }
}

executePromise();

console.log("Last");