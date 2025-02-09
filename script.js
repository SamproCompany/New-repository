fetch("a.env")
    .then(response => response.text())
    .then(data => {
      console.log(data)
    });

