window.onload = () => {
  const getJSON = async (webpage) => {
    let url = 'https://zweaywp9rg.execute-api.us-east-1.amazonaws.com/Prod';
    try {
      const response = await fetch(`${url}/visitors`, {
        method: 'POST',
        mode: 'cors',
        isBase64Encoded: false,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Website: webpage,
        }),
      });

      console.log(response);
      if (!response.ok) console.log(response);
      // check if response worked (no 404 errors etc...)
      throw new Error(response.statusText);

      console.log(response.json());
      return response.json(); // get JSON from the response
    } catch (error) {
      return error;
    }
  };

  getJSON('Cloud Challenge')
    .then((data) => {
      let count = String(data.count);
      let countList = count.split('');
      document.getElementById('hundred').innerText =
        countList[2] > 0 ? countList[1] : 0;
      document.getElementById('tenth').innerText =
        countList[1] > 0 ? countList[1] : 0;
      document.getElementById('ones').innerText = countList[0];
    })
    .catch((error) => {
      console.error(error);
    });
};
