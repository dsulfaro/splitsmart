json.author @comment.user.username
json.body @comment.body
json.time @comment.created_at.to_formatted_s(:short)
json.expense_id @comment.expense_id
