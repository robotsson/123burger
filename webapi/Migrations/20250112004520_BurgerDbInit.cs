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
                    { 1, "cheese.jpg", "Cheeseburger", 25.00m, "Burger" },
                    { 2, "dblcheese.jpg", "Double Cheeseburger", 40.00m, "Burger" },
                    { 3, "burger.jpg", "Hamburger", 20.00m, "Burger" },
                    { 4, "fries.jpg", "French fries", 15.00m, "Side Order" },
                    { 5, "water.jpg", "Sparkling Water", 10.00m, "Drink" },
                    { 6, "nukacola.jpg", "Nuka-Cola", 15.00m, "Drink" },
                    { 7, "nukaorange.jpg", "Nuka-Orange", 15.00m, "Drink" }
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
