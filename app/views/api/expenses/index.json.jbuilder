@expenses.each do |expense|
  json.set! expense.id do
    json.id expense.id
    json.lender expense.lender.username
    json.ower expense.ower.username
    json.friend_id expense.lender_id if expense.lender_id != current_user.id
    json.friend_id expense.ower_id if expense.ower_id != current_user.id
    json.amount expense.amount
    json.total expense.total
    json.description expense.description
    json.settled expense.settled
    json.month expense.created_at.to_formatted_s(:short).slice(3, 3)
    json.day expense.created_at.to_formatted_s(:short).slice(0, 2)
    json.comments expense.comments.each do |comment|
        json.author comment.user.username
        json.body comment.body
        json.time comment.created_at.to_formatted_s(:short)
    end
  end
end
