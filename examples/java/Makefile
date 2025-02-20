# Variables
JAVAC = javac
JAVA = java
SRC_DIR = src/main
BIN_DIR = bin
MAIN_CLASS = Main

# Source files
SOURCES = $(shell find $(SRC_DIR) -name "*.java")

# Default target
all: $(BIN_DIR)/$(MAIN_CLASS).class

# Compile Java source files
$(BIN_DIR)/$(MAIN_CLASS).class: $(SOURCES)
	@mkdir -p $(BIN_DIR)
	$(JAVAC) -d $(BIN_DIR) $(SOURCES)

# Run the main class
run: all
	$(JAVA) -cp $(BIN_DIR) $(MAIN_CLASS)

# Clean up
clean:
	rm -rf $(BIN_DIR)

.PHONY: all run clean
