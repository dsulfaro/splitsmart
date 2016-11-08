json.count @comments.length
@comments.each do |comment|
  json.set! comment.id do
    json.author comment.user
    json.expense_id comment.expense_id
    json.body comment.body
    json.time = comment.created_at.to_formatted_s(:short)
  end
end
