using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace webapi.Migrations
{
    /// <inheritdoc />
    public partial class BurgerDbInit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BurgerOrders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    OrderTotal = table.Column<decimal>(type: "decimal(18,2)", precision: 18, scale: 2, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BurgerOrders", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BurgerProducts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
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

            migrationBuilder.CreateTable(
                name: "OrderItems",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    BurgerProductId = table.Column<int>(type: "int", nullable: false),
                    BurgerOrderId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderItems_BurgerOrders_BurgerOrderId",
                        column: x => x.BurgerOrderId,
                        principalTable: "BurgerOrders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "BurgerProducts",
                columns: new[] { "Id", "Image", "Name", "Price", "Type" },
                values: new object[,]
                {
                    { 1, "dblcheese.jpg", "Double Cheeseburger", 4.00m, "Burger" },
                    { 2, "cheese.jpg", "Cheeseburger", 2.50m, "Burger" },
                    { 3, "burger.jpg", "Hamburger", 2.00m, "Burger" },
                    { 4, "chickenburger.jpg", "Chicken burger", 3.00m, "Burger" },
                    { 5, "veggieburger.jpg", "Veggie burger", 3.00m, "Burger" },
                    { 6, "fries.jpg", "French fries", 1.50m, "Side Order" },
                    { 7, "cheesefries.jpg", "Cheese fries", 2.00m, "Side Order" },
                    { 8, "mayodip.jpg", "Mayo dip", 0.50m, "Side Order" },
                    { 9, "garlicdip.jpg", "Garlic dip", 0.50m, "Side Order" },
                    { 10, "guacamole.jpg", "Guacamole", 1.00m, "Side Order" },
                    { 11, "cocacola.jpg", "Coca-cola", 1.00m, "Drink" },
                    { 12, "cokezero.jpg", "Coke zero", 1.00m, "Drink" },
                    { 13, "fanta.jpg", "Fanta", 1.00m, "Drink" },
                    { 14, "sprite.jpg", "Sprite", 1.00m, "Drink" },
                    { 15, "drpepper.jpg", "Dr Pepper", 1.00m, "Drink" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderItems_BurgerOrderId",
                table: "OrderItems",
                column: "BurgerOrderId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BurgerProducts");

            migrationBuilder.DropTable(
                name: "OrderItems");

            migrationBuilder.DropTable(
                name: "BurgerOrders");
        }
    }
}
