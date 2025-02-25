local utils = {}

-- Helper function to format the salary
function utils.format_currency(amount)
    local formatted = string.format("%.2f", amount)
    local k
    while true do
        formatted, k = formatted:gsub("^(-?%d+)(%d%d%d)", '%1,%2')
        if k == 0 then break end
    end
    return "$" .. formatted
end

return utils
