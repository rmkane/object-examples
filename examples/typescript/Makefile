# Variables
NODE := node
BUN := bun
DENO := deno
TSC := tsc
SRC_DIR := src
OUT_DIR := dist
MAIN_FILE := index.ts
OUTPUT_FILE := output.js

# Default target
all: clean run

# Compile TypeScript to ES6
build:
	@npm install -g esbuild
	@npx esbuild $(SRC_DIR)/$(MAIN_FILE) \
		--bundle \
		--platform=node \
		--outfile=$(OUT_DIR)/$(OUTPUT_FILE) \
		--format=cjs

# Run TypeScript compiler with ES6 module output
run: build
	$(NODE) $(OUT_DIR)/$(OUTPUT_FILE)

# Run with Node.js
run-node:
	$(NODE) --experimental-specifier-resolution=node $(SRC_DIR)/$(MAIN_FILE)

# Run with Bun
run-bun:
	$(BUN) run $(SRC_DIR)/$(MAIN_FILE)

# Run with Deno
run-deno:
	$(DENO) run $(SRC_DIR)/$(MAIN_FILE)

# Clean up
clean:
	@$(RM) -rf $(OUT_DIR)

.PHONY: all build run run-node run-bun run-deno clean
