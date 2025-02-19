CXX = g++
CXXFLAGS = -Wall -Wextra -std=c++17 -Iinclude
TARGET = bin/employee_program

SRCS = src/main.cpp src/employee.cpp
OBJS = $(SRCS:src/%.cpp=build/%.o)

all: $(TARGET)

$(TARGET): $(OBJS) | bin
	$(CXX) $(CXXFLAGS) -o $(TARGET) $(OBJS)

build/%.o: src/%.cpp | build
	$(CXX) $(CXXFLAGS) -c $< -o $@

build:
	mkdir -p build

bin:
	mkdir -p bin

clean:
	rm -rf build bin

.PHONY: all clean