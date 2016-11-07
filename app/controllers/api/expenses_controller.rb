class Api::ExpensesController < ApplicationController

  def index
    if params[:friend_id]
      @expenses = current_user.all_expenses(params[:friend_id])
    else
      @expenses = current_user.all_unsettled_expenses
    end
  end

  def create
    @expense = Expense.new(expense_params)
    if @expense.save
      render 'api/expenses/show'
    else
      render json: @expense.errors.full_messages
    end
  end

  def update

  end

  def destroy

  end

  private
  def expense_params
    params.require(:expense).permit(:lender_id)
  end
end
