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
            new BurgerProduct { Id = 1, Name = "Double Cheeseburger", Price = 4.00m, Type = "Burger", Image="dblcheese.jpg" },
            new BurgerProduct { Id = 2, Name = "Cheeseburger",        Price = 2.50m, Type = "Burger", Image="cheese.jpg" },
            new BurgerProduct { Id = 3, Name = "Hamburger",           Price = 2.00m, Type = "Burger", Image="burger.jpg" },
            new BurgerProduct { Id = 4, Name = "Chicken burger",      Price = 3.00m, Type = "Burger", Image="chickenburger.jpg" },
            new BurgerProduct { Id = 5, Name = "Veggie burger",       Price = 3.00m, Type = "Burger", Image="veggieburger.jpg" },

            new BurgerProduct { Id = 6, Name = "French fries", Price = 1.50m,  Type = "Side Order", Image="fries.jpg"},
            new BurgerProduct { Id = 7, Name = "Cheese fries", Price = 2.00m,  Type = "Side Order", Image="cheesefries.jpg"},
            new BurgerProduct { Id = 8, Name = "Mayo dip",     Price = 0.50m,  Type = "Side Order", Image="mayodip.jpg"},
            new BurgerProduct { Id = 9, Name = "Garlic dip",   Price = 0.50m,  Type = "Side Order", Image="garlicdip.jpg"},
            new BurgerProduct { Id = 10, Name = "Guacamole",    Price = 1.00m,  Type = "Side Order", Image="guacamole.jpg"},

            new BurgerProduct { Id = 11, Name = "Coca-cola", Price = 1.00m, Type = "Drink", Image="cocacola.jpg"},
            new BurgerProduct { Id = 12, Name = "Coke zero", Price = 1.00m, Type = "Drink", Image="cokezero.jpg"},
            new BurgerProduct { Id = 13, Name = "Fanta",     Price = 1.00m, Type = "Drink", Image="fanta.jpg"},
            new BurgerProduct { Id = 14, Name = "Sprite",    Price = 1.00m, Type = "Drink", Image="sprite.jpg"},
            new BurgerProduct { Id = 15, Name = "Dr Pepper", Price = 1.00m, Type = "Drink", Image="drpepper.jpg"}  
        );            
    }   

}