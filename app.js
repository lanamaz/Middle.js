~

async function testApi() {
    const res = await fetch("http://localhost:3000/sum", {
      method: "POST",
      headers: {
        // Content-Type is required
        // to tell the server how
        // the Request body must be read
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        a: 2,
        b: 2,
      }),
    });
    const responseJson = await res.json();
    return responseJson;
  }
  testApi().then((result) => console.log(result)).catch(err => console.log(err));