window.onload = () => {
  const getJSON = async (webpage) => {
    let url = ' https://gz1ost5v1h.execute-api.us-east-1.amazonaws.com/Prod';
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
      return response.json(); // get JSON from the response
    } catch (error) {
      return error;
    }
  };

  getJSON('Cloud Challenge')
    .then((data) => {
      debugger;
      // Split each digit individually
      let count = String(data.count);
      let countList = count.split('').reverse();

      let hundred =
        countList[2] === undefined ? 0 : countList[0] > 0 ? countList[0] : 0;
      let tenth =
        countList[1] === undefined ? 0 : countList[1] > 0 ? countList[1] : 0;
      let ones = countList[0];

      // Show each digit from count in the corresponding box
      document.getElementById('hundred').innerText = hundred;
      document.getElementById('tenth').innerText = tenth;
      document.getElementById('ones').innerText = ones;
    })
    .catch((error) => {
      console.error(error);
    });
};
