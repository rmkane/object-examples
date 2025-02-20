# Variables
NODE := node
BUN := bun
DENO := deno
SRC_DIR := src
MAIN_FILE := main.mjs

# Default target
all: run-node

# Run with Node.js
run-node:
	$(NODE) $(SRC_DIR)/$(MAIN_FILE)

# Run with Bun
run-bun:
	$(BUN) $(SRC_DIR)/$(MAIN_FILE)

# Run with Deno
run-deno:
	$(DENO) run $(SRC_DIR)/$(MAIN_FILE)

# Clean up (if needed)
clean:
	# Add any clean-up commands here if necessary

.PHONY: all run-node run-bun run-deno clean
