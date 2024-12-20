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
    public class BurgerOrdersController : ControllerBase
    {
        private readonly BurgerContext _context;

        public BurgerOrdersController(BurgerContext context)
        {
            _context = context;
        }

        // GET: api/BurgerOrders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BurgerOrder>>> GetBurgerOrders()
        {
            return await _context.BurgerOrders.ToListAsync();
        }


        // GET: api/BurgerOrders/Make
        [HttpGet]
        public async Task<ActionResult<BurgerOrder>> GetMake()
        {
            BurgerOrder BurgerOrder = new BurgerOrder {  OrderDate = DateTime.Now, OrderTotal = 100.00m };

            List<BurgerProduct> BurgerProducts = [ await _context.BurgerProducts.FindAsync(1),
                                                   await _context.BurgerProducts.FindAsync(4), 
                                                   await _context.BurgerProducts.FindAsync(6) ]; 

            BurgerOrder.OrderItems.Add( 
                new OrderItem { Quantity = 1, BurgerProductId = BurgerProducts[0].Id, BurgerProduct = BurgerProducts[0], BurgerOrderId = BurgerOrder.Id } );
            
            BurgerOrder.OrderItems.Add( 
                new OrderItem {Quantity = 1, BurgerProductId = BurgerProducts[1].Id, BurgerProduct = BurgerProducts[1], BurgerOrderId = BurgerOrder.Id } );

            BurgerOrder.OrderItems.Add( 
                new OrderItem { Quantity = 1, BurgerProductId = BurgerProducts[2].Id, BurgerProduct = BurgerProducts[2], BurgerOrderId = BurgerOrder.Id } );


            await _context.BurgerOrders.AddAsync(BurgerOrder);
            await _context.SaveChangesAsync();

            return BurgerOrder;
            
        }        

        // GET: api/BurgerOrders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BurgerOrder>> GetBurgerOrder(long id)
        {
            var burgerOrder = await _context.BurgerOrders.FindAsync(id);

            if (burgerOrder == null)
            {
                return NotFound();
            }

            return burgerOrder;
        }

        // PUT: api/BurgerOrders/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBurgerOrder(long id, BurgerOrder burgerOrder)
        {
            if (id != burgerOrder.Id)
            {
                return BadRequest();
            }

            _context.Entry(burgerOrder).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BurgerOrderExists(id))
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

        // POST: api/BurgerOrder
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BurgerOrder>> PostBurgerOrder(BurgerOrder burgerOrder)
        {
            _context.BurgerOrders.Add(burgerOrder);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBurgerOrder", new { id = burgerOrder.Id }, burgerOrder);
        }


        // DELETE: api/BurgerOrder/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBurgerOrder(long id)
        {
            var burgerOrder = await _context.BurgerOrders.FindAsync(id);
            if (burgerOrder == null)
            {
                return NotFound();
            }

            _context.BurgerOrders.Remove(burgerOrder);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        private bool BurgerOrderExists(long id)
        {
            return _context.BurgerOrders.Any(e => e.Id == id);
        }
    }
}