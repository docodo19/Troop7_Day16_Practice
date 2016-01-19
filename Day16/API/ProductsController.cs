using Day16.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Day16.API
{
    // GET: /api/products
    public class ProductsController : ApiController
    {
        static List<Product> _products = new List<Product>
        {
            new Product { Id = 1, Name = "Milk", Price = 2.50m },
            new Product { Id = 2, Name = "Cheese", Price = 5.44m },
            new Product { Id = 3, Name = "Apples", Price = 1.19m }
        };

        public IHttpActionResult Get()
        {
            return Ok(_products);
        }

        public IHttpActionResult get(int id)
        {
            var product = _products.Find(p => p.Id == id);
            if (product == null) return NotFound();
            return Ok(product);
        }

        public IHttpActionResult Post(Product product)
        {
            //// check if product is null
            if (product == null)
            {
                // if product is null create a new error message and send back the ModelState
                ModelState.AddModelError("", "You must fill the form");
                return BadRequest(ModelState);
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            product.Id = _products.Count + 1;
            _products.Add(product);
            return Ok();
        }
    }
}
