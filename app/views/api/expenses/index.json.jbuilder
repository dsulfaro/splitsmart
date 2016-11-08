@expenses.each do |expense|
  json.set! expense.id do
    json.id expense.id
    json.lender expense.lender.username
    json.ower expense.ower.username
    json.amount expense.amount
    json.total expense.total
    json.description expense.description
    json.settled expense.settled
    json.month expense.created_at.to_formatted_s(:short).slice(3, 3)
    json.day expense.created_at.to_formatted_s(:short).slice(0, 2)
  end
end
