namespace webapi.Models;

public class OrderItem
{
    public long Id { get; set; }
    public int Quantity { get; set; }

    public long BurgerProductId { get; set; }
    public BurgerProduct BurgerProduct { get; set; } = null!;
    
    public long BurgerOrderId { get; set; }
    public BurgerOrder BurgerOrder { get; set; } = null!;
}

