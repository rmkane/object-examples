package utils

import (
	"golang.org/x/text/language"
	"golang.org/x/text/message"
)

func FormatCurrency(amount float64) string {
	p := message.NewPrinter(language.English)
	if amount < 0 {
		return p.Sprintf("-$%.2f", -amount)
	}
	return p.Sprintf("$%.2f", amount)
}
