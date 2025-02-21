/**
 * A formatter for currency values in US dollars.
 */
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

/**
 * Utility function to format a number as currency.
 *
 * @param amount - The amount to format
 * @returns The formatted currency string
 */
function formatCurrency(amount: number): string {
  return currencyFormatter.format(amount);
}

export { formatCurrency };
