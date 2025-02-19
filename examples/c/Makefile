CC = gcc
CFLAGS = -Wall -Wextra -std=c11 -Iinclude
TARGET = bin/employee_program

SRCS = src/main.c src/employee.c
OBJS = $(SRCS:src/%.c=build/%.o)

all: $(TARGET)

$(TARGET): $(OBJS) | bin
	$(CC) $(CFLAGS) -o $(TARGET) $(OBJS)

build/%.o: src/%.c | build
	$(CC) $(CFLAGS) -c $< -o $@

build:
	mkdir -p build

bin:
	mkdir -p bin

clean:
	rm -rf build bin

.PHONY: all clean
