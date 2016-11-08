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
    @expense.settled = false;
    if @expense.valid?
      @expense.save
      render 'api/expenses/show'
    else
      render json: @expense.errors.full_messages
    end
  end

  def update

  end

  def destroy
    @expense = Expense.find_by_id(params[:expense_id])
    if @expense
      @expense.destroy
      render 'api/expenses/show'
    else
      render json: ["expense not found"]
    end
  end

  private
  def expense_params
    params.require(:expense).permit(:lender_id, :ower_id, :amount, :total, :description)
  end
end
