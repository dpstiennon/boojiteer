class IncomesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @incomes = get_budget.incomes
    render json: @incomes
  end

  def create
    @income = get_budget.incomes.create(income_params)
    render json: @income
  end

  def update
    @income = Income.update(params[:id], income_params)
    render json: @income
  end

  def destroy
    get_budget.incomes.find(params[:id]).destroy
  end

  private
  def income_params
    params.require(:income).permit(:id, :name, :amount, :frequency, :sequence)
  end

  def get_budget
    Budget.find(params[:budget_id])
  end

end
