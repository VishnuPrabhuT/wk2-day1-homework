var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/statsdb";

var stats = [{
        'city': 'San Juan',
        'zip': '00926',
        'state': 'PR',
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona',
        'zip': '11368',
        'state': 'NY',
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago',
        'zip': '60629',
        'state': 'IL',
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso',
        'zip': '79936',
        'state': 'TX',
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles',
        'zip': '90011',
        'state': 'CA',
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk',
        'zip': '90650',
        'state': 'CA',
        'income': '66453',
        'age': '35'
    }
]

MongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    }

    var dbo = db.db("statsdb");

    // console.log("\nCreated statsdb!\n");

    // dbo.createCollection("uscensus", function (err, res) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log("\nCollection uscensus!\n");
    //     db.close();
    // });

    // dbo.collection("uscensus").insertMany(stats, function (err, res) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log("\nNumber of document inserted" + res.insertedCount + "\n");
    //     db.close();
    // });

    // let newStats = [{
    //     'city': 'Pacoima',
    //     'zip': '91331',
    //     'state': 'CA',
    //     'income': '60360',
    //     'age': '33'
    // }, {
    //     'city': 'Ketchikan',
    //     'zip': '99950',
    //     'state': 'AK',
    //     'income': '00000',
    //     'age': '00'
    // }];
    // dbo.collection("uscensus").insertMany(newStats, function (err, res) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log("\n2 records Added!\n");
    //     db.close();
    // });

    // let query1 = {
    //     'city': 'Corona',
    //     'state': 'NY'
    // };
    // dbo.collection("uscensus").findOne(query1, function (err, res) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(`\nDocument returned! ${JSON.stringify(res)}\n`);
    //     db.close();
    // });

    // let query2 = {
    //     'state': /^CA/
    // };
    // dbo.collection("uscensus").findOne(query2, function (err, res) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(`\nDocument returned! ${JSON.stringify(res)}\n`);
    //     db.close();
    // });

    // var query3 = {
    //     'state': "AK"
    // };
    // var values = {
    //     $set: {
    //         zip: "38910",
    //         age: "46"
    //     }
    // };
    // dbo.collection("uscensus").updateOne(query3, values, function (err, res) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(`\n1 document updated! ${JSON.stringify(res)}}\n`);
    //     db.close();
    // });

    let sort = {
        state: 1
    };
    dbo.collection("uscensus").find().sort(sort).toArray(function (err, res) {
        if (err) {
            throw err;
        }
        console.log(res);
        db.close();
    });
});