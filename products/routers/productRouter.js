const router = require("express").Router();
const db_interface = require("../product-db-interface")


router.get("/products/ping", (req,res) => {
  res.send("pongo");
});



router.post("/products/buy", async function (req, res, next) {
  let connection_read = db_interface.get_connection(true)
  let connection_write = db_interface.get_connection(false)
  const  items  = req.body;
  let sum = 0
  let quantities = new Object()
  let bought_too_much = false
  connection_read.connect(function(err) {
    if (err) {
      res.json("Could not connect to read database")
      return
    }
    ids = items.map(({id, quantity}) => id)
    connection_read.query('SELECT price, quantity as q from local_db.products WHERE id in (?) order by field(id, ?)', [ids, ids], function (err, result) {
      if (err) {
        res.json("Database error " + err.toString())
        return;
      }
      result.forEach(function (value, i){
        sum += value.price * items[i].quantity
        if (value.q < items[i].quantity && !bought_too_much){
          res.json("Error: buying more than available")
          bought_too_much = true
          console.log("Buying more than in stock")
        }
      })
      if (bought_too_much){
        return
      }
      console.log("someone bought beer for " + sum)
      connection_write.connect(function(err) {
        if (err) {
          res.json("Could not connect to read database")
          return
        }
        res.json(sum);
        result.forEach(function (value, i) {
          connection_write.query(`UPDATE local_db.products
                                  SET quantity = ?
                                  where id = ?`, [value.q - items[i].quantity, items[i].id])
        })

        connection_read.end()
        connection_write.end()
      })
    })
  })
})
router.get("/products/dbinit", async function (req, res){
  let connection = db_interface.get_connection(false)
  connection.connect( function(err) {
    if (err) {
      res.json("Could not connect to database")
      return
    }
    connection.query(`DROP DATABASE IF EXISTS local_db;`)
    connection.query(`CREATE DATABASE local_db;`)
    connection.query(`DROP TABLE IF EXISTS local_db.products;`)
    connection.query(`CREATE TABLE local_db.products
                             (
                               id          int(10)      NOT NULL PRIMARY KEY,
                               name        varchar(100) NOT NULL,
                               description text,
                               quantity    int,
                               price       decimal(15, 2)
                             );`)


    connection.query(`insert into local_db.products
                                       VALUES (1, 'Karhu',
                                               'Karhu, meaning bear in Finnish, is a pale lager with a strong taste.',
                                               10, 5.99);`)
    connection.query(`insert into local_db.products
                             VALUES (2, 'Karhu Laku Porter', 'Karhu porter is an awful beer, it tastes disgusting.',
                                     1000, 1.99);`)
    connection.query( `insert into local_db.products
                             VALUES (3, 'Sandels',
                                     'The regular Sandels is a pale lager, but other versions of the beer exist as well, such as a darker beer, and a wheat beer. Sandels was named the top rated beer brand in Finland in a 2015 study.',
                                     23, 2.99);`)
    connection.query(`insert into local_db.products
                             VALUES (4, 'A. Le Coq',
                                     'A. Le Coq Gold is a light yellow premium beer with dense bubbles. Its sweetish character is well balanced with the fresh bitterness of hops.',
                                     9, 9.99);`)
    connection.query(`insert into local_db.products
                             VALUES (5, 'Lahden Erikois New England IPA',
                                     'Lahden Erikois NEIPA on mehukkaasti vaaleankeltainen ja samea pintahiivaolut. Sen maku on tulvillaan kypsien trooppisten hedelmien, kuten ananaksen, mangon ja appelsiinin mehevyytt??.',
                                     67, 20.00);`)

    connection.end()
    res.json("Database created!!!")
  })
})
router.get("/products", async function (req,res, next) {
  let connection = db_interface.get_connection(true)
  connection.connect( function(err){
    if (err){
      res.json("Could not connect to database")
      return
    }
    connection.query(`SELECT * from local_db.products`, function (err, products){
          if (err){
            res.json(err)
          } else {
            res.json(products)
          }
          connection.end()
        }
    );
  })
})
module.exports = router;