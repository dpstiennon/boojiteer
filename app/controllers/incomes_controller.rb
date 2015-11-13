class IncomesController < ApplicationController
  def index
    @incomes = get_budget.incomes
    render json: @incomes
  end

  def create
    get_budget.incomes.create(income_params)
  end

  def edit
    @budget.incomes.update(income_params)
  end

  def update
  end

  def destroy
    @budget.incomes.find(income_params[:id]).destroy
  end

  private
  def income_params
    params.require(:income).permit(:id, :name, :amount, :frequency, :sequence)
  end

  def get_budget
    Budget.find(params[:budget_id])
  end

end
