window.onload = () => {
  const getJSON = async (webpage) => {
    let url = 'https://sr8rnh4txe.execute-api.us-east-1.amazonaws.com/Prod';
    try {
      const response = await fetch(`${url}/visitors`, {
        "method": 'POST',
        "mode": 'cors',
        "isBase64Encoded": false,
        "headers": {
          'Content-Type': 'application/json',
        },
        "body": JSON.stringify({
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

        let count = String(data.count);
        let countList = count.split('');

        let hundred = (countList[0] === undefined) ? 0 : (countList[0] > 0) ? countList[0] : 0;
        let tenth = (countList[1] === undefined) ? 0 : (countList[1] > 0) ? countList[1] : 0;
        let ones = countList[2]

        // Show each digit from count in the corresponding box
        document.getElementById('hundred').innerText = hundred;
        document.getElementById('tenth').innerText = tenth
        document.getElementById('ones').innerText = ones;

    })
    .catch((error) => {
      console.error(error);
    });
};
