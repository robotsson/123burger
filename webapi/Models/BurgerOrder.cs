namespace webapi.Models;

public class BurgerOrder
{
    public int Id { get; set; }
    public DateTime OrderDate { get; set; }
    public decimal OrderTotal { get; set; }
    public List<OrderItem> OrderItems { get; set; } = [];

}
