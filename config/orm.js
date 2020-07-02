const connection = require("./connection");

const orm = {
    getAll: (table, cb) => {
        connection.query("SELECT * FROM ??", [table], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    createOne: (table, newRowValues, cb) => {
        const queryString = "INSERT INTO ?? SET ? "
        connection.query(queryString, [table, newRowValues], (err, data) => {
            if (err) throw err;
            cb(data)
        });
    },
    updateById: (table, updateValues, id, cb) => {
        const queryString = "UPDATE ?? SET ? WHERE id = ?";
        connection.query(queryString, [table, updateValues, id], (err, data) => {
            if (err) throw err;
            cb(data)
        });
    }
};

orm.getAll("burgers", burgers => console.log(burgers));

orm.createOne("burgers", {burger_name: "Cheeseburger"}, result => {
  console.log(result);
});

orm.updateById("burgers", {burger_name: "Veggie Burger"}, 3, result => {
  console.log(result);
});

module.exports = orm;