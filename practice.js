// Fetch API

fetch("https://fakestoreapi.com/users/abcd", { method: "GET" })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Data Not Found");
    } else {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });

async function fetchData() {
  try {
    let response = await fetch("https://fakestoreapi.com/users", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Data Not Found");
    } else {
      let data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error.message);
  }
}

fetchData();
