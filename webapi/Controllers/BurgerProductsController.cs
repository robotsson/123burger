using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BurgerProductsController : ControllerBase
    {
        private readonly BurgerContext _context;

        public BurgerProductsController(BurgerContext context)
        {
            _context = context;
        }

        // GET: api/BurgerProducts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BurgerProduct>>> GetBurgerProducts()
        {
            return await _context.BurgerProducts.ToListAsync();
        }

        // GET: api/BurgerProducts/Burgers
        [HttpGet("Burgers")]
        public async Task<ActionResult<IEnumerable<BurgerProduct>>> GetBurgers()
        {
            return await _context.BurgerProducts.Where( b => b.Type == "Burger").ToListAsync();
        }        

        // GET: api/Burger/SideOrders
        [HttpGet("SideOrders")]
        public async Task<ActionResult<IEnumerable<BurgerProduct>>> GetSideOrders()
        {
            return await _context.BurgerProducts.Where( b => b.Type == "SideOrder").ToListAsync();
        }  

        // // GET: api/Burger/Drinks
        [HttpGet("Drinks")]
        public async Task<ActionResult<IEnumerable<BurgerProduct>>> GetDrinks()
        {
            return await _context.BurgerProducts.Where( b => b.Type == "Drinks").ToListAsync();
        }           


        // GET: api/BurgerProducts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BurgerProduct>> GetBurgerProduct(int id)
        {
            var burgerProduct = await _context.BurgerProducts.FindAsync(id);

            if (burgerProduct == null)
            {
                return NotFound();
            }

            return burgerProduct;
        }


        // PUT: api/Burger/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBurgerProduct(int id, BurgerProduct burgerProduct)
        {
            if (id != burgerProduct.Id)
            {
                return BadRequest();
            }

            _context.Entry(burgerProduct).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BurgerProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Burger
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BurgerProduct>> PostBurgerProduct(BurgerProduct burgerProduct)
        {
            _context.BurgerProducts.Add(burgerProduct);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBurgerProduct", new { id = burgerProduct.Id }, burgerProduct);
        }

        // Typically restricted to Admin role
        // [Authorize(Roles = "Admin")]
        // DELETE: api/Burger/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBurgerProduct(int id)
        {
            var burgerProduct = await _context.BurgerProducts.FindAsync(id);
            if (burgerProduct == null)
            {
                return NotFound();
            }

            _context.BurgerProducts.Remove(burgerProduct);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BurgerProductExists(int id)
        {
            return _context.BurgerProducts.Any(e => e.Id == id);
        }
    }
}
