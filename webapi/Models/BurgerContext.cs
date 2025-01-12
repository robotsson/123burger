using Microsoft.EntityFrameworkCore;

namespace webapi.Models;

public class BurgerContext : DbContext
{
    public BurgerContext(DbContextOptions<BurgerContext> options)
        : base(options)
    {
    }

    public DbSet<BurgerProduct> BurgerProducts { get; set; } = null!;
    public DbSet<OrderItem> OrderItems { get; set; } = null!;
    public DbSet<BurgerOrder> BurgerOrders { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<BurgerProduct>()
            .Property(b => b.Price)
            .HasPrecision(18, 2); 

        modelBuilder.Entity<BurgerOrder>()
            .Property(b => b.OrderTotal)
            .HasPrecision(18, 2); 


        // modelBuilder.Entity<BurgerProduct>()
        //        .Property(b=>b.Id)
        //                 .ValueGeneratedNever()
        //                 .HasColumnType("int");

        modelBuilder.Entity<BurgerProduct>().HasData(
            new BurgerProduct { Id = 1, Name = "Cheeseburger", Price = 25.00m, Type = "Burger", Image="cheese.jpg" },
            new BurgerProduct { Id = 2, Name = "Double Cheeseburger", Price = 40.00m, Type = "Burger", Image="dblcheese.jpg" },
            new BurgerProduct { Id = 3, Name = "Hamburger", Price = 20.00m, Type = "Burger", Image="burger.jpg" },
            new BurgerProduct { Id = 4, Name = "French fries", Price = 15.00m, Type = "Side Order", Image="fries.jpg"},
            new BurgerProduct { Id = 5, Name = "Sparkling Water", Price = 10.00m, Type = "Drink", Image="water.jpg"},
            new BurgerProduct { Id = 6, Name = "Nuka-Cola", Price = 15.00m, Type = "Drink", Image="nukacola.jpg"},
            new BurgerProduct { Id = 7, Name = "Nuka-Orange", Price = 15.00m, Type = "Drink", Image="nukaorange.jpg"} 
        );            
    }   

}