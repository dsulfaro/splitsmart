json.id @expense.id
json.lender @expense.lender_id
json.ower @expense.ower_id
json.amount @expense.amount
json.total @expense.total
json.description @expense.description
json.settled @expense.settled
json.month @expense.created_at.to_formatted_s(:short).slice(3, 3)
json.day @expense.created_at.to_formatted_s(:short).slice(0, 2)
