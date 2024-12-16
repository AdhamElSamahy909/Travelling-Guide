document
  .getElementById("searchForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const formAction = this.action;

    console.log(formAction);
    console.log("SRCH: ", this.Search.value);
    const formData = new FormData(this);
    console.log("FD: ", formData);

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    console.log("SRCH GET: ", formData.get("Search"));

    try {
      let response = await fetch(formAction, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Search: formData.get("Search"),
        }),
      });

      response = await response.json();
      window.location.href = response.redirect;

      // console.log("SEARCHRESULTS: ", response);
    } catch (error) {
      console.log(error);
      console.log(error);
    }
  });
