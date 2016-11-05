json.expense do
  json.lender @expense.lender_id
  json.ower @expense.ower_id
  json.amount @expense.amount
  json.total @expense.total
  json.description @expense.description
  json.settled @expense.settled
end
