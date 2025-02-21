package utils;

import java.text.NumberFormat;
import java.util.Locale;

public class FormatUtils {
    private static final NumberFormat currencyFormatter;

    static {
        currencyFormatter = NumberFormat.getCurrencyInstance(Locale.US);
    }

    public static String formatCurrency(float amount) {
        return currencyFormatter.format(amount);
    }
}
