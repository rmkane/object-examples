# Variables
PROJECT_DIR := EmployeeDemo
PROJECT := $(PROJECT_DIR)/EmployeeDemo.csproj
CONFIGURATION := Debug

.DEFAULT_GOAL := run

# Build the project
.PHONY: build
build:
	dotnet build $(PROJECT) -c $(CONFIGURATION)

# Run the application
.PHONY: run
run: build
	dotnet run --project $(PROJECT) -c $(CONFIGURATION)

# Clean build artifacts
.PHONY: clean
clean:
	dotnet clean $(PROJECT)
	rm -rf $(PROJECT_DIR)/bin $(PROJECT_DIR)/obj

# Add a debug target
.PHONY: debug
debug:
	dotnet build $(PROJECT) -c Debug
	dotnet run --project $(PROJECT) -c Debug

# Add a release target
.PHONY: release
release:
	dotnet build $(PROJECT) -c Release
	dotnet run --project $(PROJECT) -c Release 
