class SessionsController < ApplicationController
  def new
    @user = User.new()
  end

  def create
    logged_in_user = User.find_by_email(user_params[:email])
    unless logged_in_user.nil? || logged_in_user.password != user_params[:password]
      redirect_to user_budget_path(logged_in_user, logged_in_user.budgets.last_used_budget)


    else
      flash.alert = "We're so sorry!  It appears you entered the wrong password for your username"
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
