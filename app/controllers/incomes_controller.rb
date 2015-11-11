class IncomesController < ApplicationController
  def index
    @incomes = Budget.find(params[:budget_id]).incomes
    # respond_to do |x|
    #
    # end
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
