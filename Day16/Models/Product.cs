using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Day16.Models
{
    public class Product
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Product name is required!!!")]
        [MaxLength(15, ErrorMessage = "Product name is too long!!!")]
        public string Name { get; set; }

        [Required(ErrorMessage = "You must give a price for the item!!!")]
        [Range(0, 100000, ErrorMessage = "Product price must be $0 to $100,000")]
        public decimal Price { get; set; }

    }

}