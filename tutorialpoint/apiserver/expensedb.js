var store = require("nedb")
var fs = require('fs');
var expenses = new store({ filename: "expense.db", autoload: true })
expenses.find({}, function (err, docs) {
   console.log("3");
   if (docs.length == 0) {
      console.log("4");
      loadExpenses();
      console.log("5");
   }
      console.log("6");
})
function loadExpenses() {
   readCsv("data.csv", function (data) {
      console.log("loadExpenses1")
      console.log(data);
      console.log("loadExpenses2")

      data.forEach(function (rec, idx) {
	 if (!rec[0]) return;
         item = {}
         item.name = rec[0];
         item.amount = parseFloat(rec[1]);
         item.spend_date = new Date(rec[2]);
         item.category = rec[3];

         expenses.insert(item, function (err, doc) {
            console.log('Inserted', doc.name, 'with ID', doc._id);
         })
      })
      console.log("done loadExpenses1")
   })
   console.log("done loadExpenses12345")
}
function readCsv(file, callback) {
   fs.readFile(file, 'utf-8', function (err, data) {
      if (err) throw err;
      var lines = data.split('\n');
      var result = lines.map(function (line) {
         return line.split(',');
      });
      callback(result);
   });
}
module.exports = expenses
