class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.includes(:user)
                        .where("expense_id = ?", params[:expense_id])
  end

  def create

  end

  def destroy

  end

  private
  def comment_params
    params.require(:comment).permit(:author_id, :expense_id, :body)
  end
end
