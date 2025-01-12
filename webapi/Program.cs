using webapi.Models;
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;

var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

if( RuntimeInformation.IsOSPlatform(OSPlatform.Windows) )
{
    builder.Services.AddDbContext<BurgerContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("BurgerContextWindows") ?? throw new InvalidOperationException("Connection string 'BurgerContextWindows' not found.")));
}
else
{
    builder.Services.AddDbContext<BurgerContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("BurgerContext") ?? throw new InvalidOperationException("Connection string 'BurgerContext' not found.")));    
}

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy  =>
                      {
                          policy.WithOrigins("https://localhost:7210",
                                             "http://localhost:5173")
                                .AllowAnyHeader()
                                .AllowAnyMethod();
                      });
});

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // Responds to https://localhost:7210/openapi/v1.json
    app.MapOpenApi();
    // http
    app.UseSwaggerUI( options => 
    {
        options.SwaggerEndpoint("/openapi/v1.json","Web API");
    });
}

app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
