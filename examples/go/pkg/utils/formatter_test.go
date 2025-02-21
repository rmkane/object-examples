package utils

import "testing"

func TestFormatCurrency(t *testing.T) {
	// Test cases
	tests := []struct {
		input    float64
		expected string
	}{
		{1_234.56, "$1,234.56"},
		{0.99, "$0.99"},
		{-1_000.00, "-$1,000.00"},
	}

	for _, test := range tests {
		result := FormatCurrency(test.input)
		if result != test.expected {
			t.Errorf("FormatCurrency(%f) = %s; expected %s", test.input, result, test.expected)
		}
	}
}
