const connection = require("./connection.js");

const orm = {
    selectAll: (tableName, cb) => {
      const sql = "SELECT * FROM ??";
      connection.query(sql, [tableName], (err, result) => {
        if (err) throw(err);
        cb(result);
      });
    },
  
    insert: (tableName, newData, cb) => {
      const sql = "INSERT INTO 'burger' SET 'shroom'";
      connection.query(sql, [tableName, newData], (err, result) => {
        if (err) throw(err);
        cb(result);
        console.log(result)
      });
    },
  
    update: (tableName, updateData, condition, cb) => {
      const sql = "UPDATE ?? SET ? WHERE ?";
      connection.query(sql, [tableName, updateData, condition], (err, result) => {
        if (err) throw(err);
        cb(result);
      });
    },
  
    delete: (tableName, condition, cb) => {
      const sql = "DELETE FROM ?? WHERE ?";
      connection.query(sql, [tableName, condition], (err, result) => {
        if (err) throw(err);
        cb(result);
      });
    }
};

module.exports = orm;