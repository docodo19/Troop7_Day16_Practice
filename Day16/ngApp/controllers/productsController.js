var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ProductsController = (function () {
            function ProductsController($resource) {
                this.productResource = $resource('/api/products/:id');
                this.getProducts();
            }
            ProductsController.prototype.getProducts = function () {
                this.products = this.productResource.query();
                console.log(this.products);
            };
            ProductsController.prototype.getProduct = function (id) {
                this.product = this.productResource.get({ id: id });
                console.log(this.product);
            };
            ProductsController.prototype.save = function () {
                var _this = this;
                // let validationErrors to an array
                this.validationErrors = [];
                // make a post call to save the product
                this.productResource.save(this.product).$promise.then(function () {
                    // on Success
                    _this.getProducts();
                }).catch(function (error) {
                    // on Error
                    // loop thru modelstate to extract error messages and concat (add) to this.validationErrors
                    for (var i in error.data.modelState) {
                        var errorMessage = error.data.modelState[i];
                        _this.validationErrors = _this.validationErrors.concat(errorMessage);
                        console.log(_this.validationErrors);
                    }
                });
            };
            return ProductsController;
        })();
        Controllers.ProductsController = ProductsController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=productsController.js.map