const getJSON = async (webpage) => {
  let url = 'https://zweaywp9rg.execute-api.us-east-1.amazonaws.com/Prod';
  try {
    console.log(`${url}/visitors`)
    const response = await fetch(`${url}/visitors`, {
      "method": 'POST',
      "mode": 'cors',
      "isBase64Encoded": false,
      "headers": {
        "Content-Type": "application/json",
      },
      "body": JSON.stringify({
        Website: webpage,
      })
    });

    if (!response.ok)
      // check if response worked (no 404 errors etc...)
      throw new Error(response.statusText);

    return response.json(); // get JSON from the response

  } catch (error) {
    return error;
  }
};

getJSON('Cloud Challenge')
  .then((data) => {
    document.getElementById('hundred').innerText = String(data.count).padStart(6, "0");
  })
  .catch((error) => {
    console.error(error);
  });

