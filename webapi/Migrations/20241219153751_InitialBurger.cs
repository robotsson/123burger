using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace webapi.Migrations
{
    /// <inheritdoc />
    public partial class InitialBurger : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BurgerProducts",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Price = table.Column<decimal>(type: "decimal(18,2)", precision: 18, scale: 2, nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BurgerProducts", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "BurgerProducts",
                columns: new[] { "Id", "Image", "Name", "Price", "Type" },
                values: new object[,]
                {
                    { 1L, "cheese.jpg", "Cheeseburger", 25.00m, "Burger" },
                    { 2L, "dblcheese.jpg", "Double Cheeseburger", 40.00m, "Burger" },
                    { 3L, "burger.jpg", "Hamburger", 20.00m, "Burger" },
                    { 4L, "fries.jpg", "French fries", 15.00m, "Side Order" },
                    { 5L, "water.jpg", "Sparkling Water", 10.00m, "Drink" },
                    { 6L, "nukacola.jpg", "Nuka-Cola", 15.00m, "Drink" },
                    { 7L, "nukaorange.jpg", "Nuka-Orange", 15.00m, "Drink" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BurgerProducts");
        }
    }
}
