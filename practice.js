// Promise

let newPromise = new Promise((resolve, reject) => {    

  let dataReceived = true;

  if (dataReceived) {
    resolve("Data Received");
  } else {
    reject("Date Not Received");
  }
});

newPromise
  .then((message) => {
    console.log("Success: " + message);
    return "Next Success: " + message
  })
  .then((nextMessage)=>{
    console.log(nextMessage)
  })
  .catch((error) => {
    console.log("Failure: " + error);
  })
  .finally(() => {
    console.log("End");
  });

/*
      var Promise: PromiseConstructor
new <any>(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void) => Promise<any>
Creates a new Promise.

@param executor
A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.

 (method) Promise<any>.then<void, never>(onfulfilled?: ((value: any) => void | PromiseLike<void>) | null | undefined, onrejected?: ((reason: any) => PromiseLike<never>) | null | undefined): Promise<...>
Attaches callbacks for the resolution and/or rejection of the Promise.

@param onfulfilled — The callback to execute when the Promise is resolved.

@param onrejected — The callback to execute when the Promise is rejected.

@returns — A Promise for the completion of which ever callback is executed.

(method) Promise<void>.catch<void>(onrejected?: ((reason: any) => void | PromiseLike<void>) | null | undefined): Promise<void>
Attaches a callback for only the rejection of the Promise.

@param onrejected — The callback to execute when the Promise is rejected.

@returns — A Promise for the completion of the callback.

(method) Promise<void>.finally(onfinally?: (() => void) | null | undefined): Promise<void>
Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The resolved value cannot be modified from the callback.

@param onfinally — The callback to execute when the Promise is settled (fulfilled or rejected).

@returns — A Promise for the completion of the callback.

*/


// callback hell


function fetchProfile(successCallback, errorCallback){
    let dataReceived = true;

    if(dataReceived){
        successCallback("Data Received")
    }
    else{
        errorCallback("Data Not Received")
    }

}

fetchProfile(
    (message)=>{
        console.log(message);

        fetchProfile(
            (nextMessage)=>{
                console.log("Next Message: " + nextMessage)
            },
            (nextError)=>{
                console.log("Next Error: " + nextError)
            }
        )
    }, 
    (error)=>{
        console.log(error)
    })
