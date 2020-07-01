const orm = require("../config/orm");

const burger = {
    all: (cb) => orm.getAll("burgers", cb),
    create: (burger_name, cb) => orm.createOne("burgers", {burger_name}, cb),
    markDevoured: (id, cb) => {
        orm.updateById("burgers", {devoured: true}, id, cb);
    },
};

burger.all(burgers => console.log(burgers));

burger.create("Veggie Burger", (result) => console.log(result));

burger.markDevoured(3, (result)=>{
    console.log(result)
});

module.exports = burger; 