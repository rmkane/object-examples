# Variables
NODE := node
NPM := npm
BUN := bun
DENO := deno
SRC_DIR := src
MAIN_FILE := index.mjs

# Default target
all: run

# Run vis npm script
run:
	$(NPM) run start

# Run with Node.js
run-node:
	$(NODE) $(SRC_DIR)/$(MAIN_FILE)

# Run with Bun
run-bun:
	$(BUN) run $(SRC_DIR)/$(MAIN_FILE)

# Run with Deno
run-deno:
	$(DENO) run $(SRC_DIR)/$(MAIN_FILE)

# Clean up (if needed)
clean:
	# Add any clean-up commands here if necessary

.PHONY: all run run-node run-bun run-deno clean
