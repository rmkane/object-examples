# Variables
CARGO := cargo
PROJECT_DIR := employee
MANIFEST_PATH := $(PROJECT_DIR)/Cargo.toml

BINARY_PATH = $(PROJECT_DIR)/target/debug/$(shell basename $(PROJECT_DIR))

# Default target
all: build

# Build the project
build:
	$(CARGO) build --manifest-path $(MANIFEST_PATH)

# Run the project
dev:
	$(CARGO) run --manifest-path $(MANIFEST_PATH)

# Run the compiled binary directly
run: build
	$(BINARY_PATH)

# Test the project
test:
	$(CARGO) test --manifest-path $(MANIFEST_PATH)

# Build documentation for the project
doc:
	$(CARGO) doc --manifest-path $(MANIFEST_PATH) --open

# Clean the project
clean:
	$(CARGO) clean --manifest-path $(MANIFEST_PATH)

.PHONY: all build dev run-binary test doc clean
