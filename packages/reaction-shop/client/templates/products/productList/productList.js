//**********************************************************************************************************
// All product js is here.
//**********************************************************************************************************

// *****************************************************
// general helper to return products data
// returns object
// *****************************************************
Template.productList.helpers({
    products: function () {
        return Products.find();
    }
});