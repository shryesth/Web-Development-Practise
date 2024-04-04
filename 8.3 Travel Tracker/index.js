import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "postgres",
  port: 5432
});

db.connect()



async function checkVisisted() {
  const result = await db.query("select country_code from visited_countries")

  let countries = []

  result.rows.forEach((country) => {
    countries.push(country.country_code)
  })
  return countries
}


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const countries = await checkVisisted()
  res.render("index.ejs", { countries: countries, total: countries.length })
  console.log(countries)
});


app.post("/add", async (req, res) => {
  const request = req.body["country"]
  console.log(request)
  try {
    const result = await db.query("select country_code from countries where LOWER(country_name) like '%'|| $1 || '%'; ", [request])
    const country = result.rows[0].country_code
    try {
      if (result.rows != 0) {
        console.log(result.rows[0].country_code)

        await db.query("insert into visited_countries (country_code) values ($1)", [country])

        res.redirect("/")
      }
    } catch (err) {
      console.log(err)
      const countries = await checkVisisted();
      res.render("index.ejs", { countries: countries, total: countries.length, error: "Country has already been added, try again" })
    }
  } catch (err) {
    console.log(err)
    const countries = await checkVisisted();
    res.render("index.ejs", { countries: countries, total: countries.length, error: "Country doesnt exist, try again" })
    // res.redirect("/")
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
