class BudgetsController < ApplicationController
  def show
      @user = User.find(params[:user_id])
      @budget = Budget.find(params[:id])
      @budget.update_attribute(:updated_at, DateTime.now)
  end
end
