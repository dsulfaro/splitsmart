class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.includes(:user)
                        .where("expense_id = ?", params[:expense_id])
  end

  def create
    @comment = Comment.create(comment_params)
    if @comment.save
      render 'api/comments/show'
    else
      render json: ["invalid comment params"], status: 422
    end
  end

  def destroy

  end

  private
  def comment_params
    params.require(:comment).permit(:author_id, :expense_id, :body)
  end
end
