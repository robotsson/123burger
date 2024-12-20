namespace webapi.Models;

public class OrderItem
{
    public int Id { get; set; }
    public int Quantity { get; set; }

    public int BurgerProductId { get; set; }
    public BurgerProduct BurgerProduct { get; set; } = null!;
    
    public int BurgerOrderId { get; set; }
    // public BurgerOrder BurgerOrder { get; set; } = null!;
}

