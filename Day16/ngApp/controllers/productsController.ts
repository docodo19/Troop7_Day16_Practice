namespace MyApp.Controllers {

    export class ProductsController {
        private productResource;
        public product;
        public products;
        public validationErrors;

        constructor($resource: ng.resource.IResourceService) {
            this.productResource = $resource('/api/products/:id');
            this.getProducts();
        }

        public getProducts() {
            this.products = this.productResource.query();
            console.log(this.products);
        }

        public getProduct(id: number) {
            this.product = this.productResource.get({ id: id });
            console.log(this.product);
        }

        public save() {
            // let validationErrors to an array
            this.validationErrors = [];
            // make a post call to save the product
            this.productResource.save(this.product).$promise.then(() => {
                // on Success
                this.getProducts();
            }).catch((error) => {
                // on Error
                // loop thru modelstate to extract error messages and concat (add) to this.validationErrors
                for (let i in error.data.modelState) {
                    let errorMessage = error.data.modelState[i];
                    this.validationErrors = this.validationErrors.concat(errorMessage);
                    console.log(this.validationErrors);
                }
            });
        }
    }
}