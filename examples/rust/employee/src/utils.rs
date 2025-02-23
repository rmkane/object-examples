use num_format::{Locale, ToFormattedString};

pub fn format_currency(amount: f64) -> String {
    let formatted_amount = (amount as i64).to_formatted_string(&Locale::en);
    format!(
        "${}.{:02}",
        formatted_amount,
        (amount.fract() * 100.0).abs() as i64
    )
}
