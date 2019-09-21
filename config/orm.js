var connection = require("../config/connection.js");
function printQuestionMarks(num) 
{
    var arr = [];
  
    for (var i = 0; i < num; i++) 
    {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // using mysql conversions for objects
  function objToSql(ob) 
  {
    var arr = [];
  
    // pushing string into array 
    for (var key in ob) 
    {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) 
      {
        if (typeof value === "string" && value.indexOf(" ") >= 0) 
        {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a comma separated string
    return arr.toString();
  }
//crud application functions
var orm = {
    selectAll: function(tableInput, cb) 
    {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) 
      {
        if (err) 
        {
          throw err;
        }
        cb(result);
      });
    },
    //create function
    insertOne: function(table, cols, vals, cb) 
    {
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, vals, function(err, result) 
      {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
  
    //update function
    updateOne: function(table, objColVals, condition, cb) 
    {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) 
      {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    //delete function
    deleteOne: function(table, condition, cb)
    {
      var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;

      connection.query(queryString, function(err, result)
      {
        if(err){
          throw err;
        }
        cb(result);
      });
    }
};
  
//exporting orm 
module.exports = orm;
  