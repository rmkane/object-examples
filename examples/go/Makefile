GO := go
NAME := go-example
BIN_DIR := bin
ENTRY := main.go

.PHONY: all dev build run format lint clean test

all: clean format lint run

dev:
	$(GO) run $(ENTRY)

build:
	@mkdir -p $(BIN_DIR)
	$(GO) build -o $(BIN_DIR)/$(NAME) $(ENTRY)

run: build
	$(BIN_DIR)/$(NAME)

format:
	$(GO) fmt ./...

lint:
	$(GO) vet ./...

clean:
	$(RM) -rf $(BIN_DIR)

test:
	$(GO) test ./...
