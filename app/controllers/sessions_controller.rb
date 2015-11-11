class SessionsController < ApplicationController
  def new
    @user = User.new()
  end

  def create
    logged_in_user = User.find_by_email(user_params[:email])
    unless logged_in_user.nil? || logged_in_user.password != user_params[:password]
      redirect_to user_budget_path(logged_in_user, logged_in_user.budgets.last_used_budget)


    else
      flash[:danger] = logged_in_user.nil? ? "That email address is not registered yet" : "It seems like you typed the wrong password"
      redirect_to login_path
    end

  end

  def destroy
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
