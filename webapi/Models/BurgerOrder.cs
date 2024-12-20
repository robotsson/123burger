namespace webapi.Models;

public class BurgerOrder
{
    public long Id { get; set; }
    public DateTime OrderDate { get; set; }
    public decimal OrderTotal { get; set; }
    public List<OrderItem> OrderItems { get; } = [];

}
