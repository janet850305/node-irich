"use strict";
module.exports=function(sequelize,DataType){
    var Account=sequelize.define('Account',{
        title:DataType.STRING,
        type:DataType.STRING,
        cost:DataType.STRING

    });
    return Account;
}