# Burger restaurant order kiosk backend 

## ASP.Net Web API 
Web API for handling products and orders implemented in C# using Entity Framework and SQL Server.<p>

## How to run the application

This run this application *.NET 8.0 SDK and Runtime*, *Entity Framework* and *SQL Server* has to be installed. 

### Install SQL Server

**Windows**: I have used SQL Express.

SQL Express can be downloaded here:<br>
https://www.microsoft.com/en-us/sql-server/sql-server-downloads<p>

**Mac**: I have used a *Docker* image with the SQL server.<p>

Docker:<br>
https://docs.docker.com/desktop/setup/install/mac-install/<p>
The Docker image can be installed using:
```
sudo docker pull mcr.microsoft.com/mssql/server:2022-latest
```

It is not required but helps to have these tools installed: *Azure Data Studio*, and the command line tools *sqlcmd* and *mssql*<p>
Azure Data Studio:<br> 
https://learn.microsoft.com/en-us/azure-data-studio/download-azure-data-studio<p>

Installing *sqlcmd* and *mssql* using homebrew:
```
brew install sqlcmd
```
```
brew tap microsoft/mssql-release https://github.com/Microsoft/homebrew-mssql-release
brew update
brew install mssql-tools18
```

### Install Entity Framework packages and tools

Enter the `webapi/` directory, it at the top level of the project root directory

Then use the dotnet command line tools for package installation:<p>
```
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools
```

And command line tools installed globally:<p>
```
dotnet tool install --global dotnet-ef
```

### Initialize the database and then run the app

Database can then be initialized using:<p>
```
dotnet ef update database
```

After that the app can be started using:<p>
```
dotnet run
```

The database should be found on the SQL server as "BurgerBase". 
The Web API has a swagger interface, found at /swagger/ on the web server.
