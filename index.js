const express = require("express");
const sql = require("mssql/msnodesqlv8");
const bodyParser  = require("body-parser");

const app = express();

app.use(express.json({extended: false}))



//Database Configuration
let config = {
//   driver: "msnodesqlv8",
  connectionString:
    "Driver={ODBC Driver 17 for SQL Server};Server=utibuhealth-rds.cre2a0suehet.eu-west-2.rds.amazonaws.com;Database=UtibuHealth;Uid=admin;Pwd=MayAngel254_",
};

//Connect to db
sql.connect(config, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("success");
  }
});

app.listen(8080, () => {
  console.log("listening on 8080");
});

app.use(bodyParser.json())

//Customers 
const customerRouter  = require("./Api/Customers/customers.router")
app.use("/api", customerRouter)