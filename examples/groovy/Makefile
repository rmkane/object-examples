# Variables
GROOVY = groovy
GROOVYC = groovyc
SRC_DIR = src
BUILD_DIR = build
MAIN_CLASS = Main.groovy
CLASS_PATH = $(SRC_DIR)

# Default target
.PHONY: all
all: compile run

# Development mode - direct execution without explicit compilation
.PHONY: dev
dev:
	$(GROOVY) -cp $(CLASS_PATH) $(SRC_DIR)/$(MAIN_CLASS)

# Compile Groovy sources
.PHONY: compile
compile:
	mkdir -p $(BUILD_DIR)
	$(GROOVYC) -d $(BUILD_DIR) $(SRC_DIR)/**/*.groovy

# Run the compiled classes
.PHONY: run
run: compile
	$(GROOVY) -cp $(BUILD_DIR):$(CLASS_PATH) $(SRC_DIR)/$(MAIN_CLASS)

# Clean up any compiled classes
.PHONY: clean
clean:
	rm -rf $(BUILD_DIR)
	find . -name "*.class" -type f -delete 