const axios = require("axios");
const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const { companies } = require("./data/finalList");

app.use(express.json());

app.get("/companies", async (req, res) => {
  let companyList = [];
  let baseUrl = "https://basis.org.bd/get-member-list?page=";

  try {
    for (let i = 1; i <= 1; i++) {
      const response = await axios.get(`${baseUrl}${i}`);
      const data = await response.data.data;
      companyList = [...companyList, ...data];
      //   console.log(companyList, "Again");
      console.log(`-------- ${i} ------------`);
    }
    fs.writeFileSync("data/companyList.json", JSON.stringify(companyList));
    res.json(companies);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
