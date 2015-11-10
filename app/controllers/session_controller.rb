class SessionController < ApplicationController
  def new
    @user = User.new()
  end

  def create
    logged_in_user = User.find_by_email(user_params[:email])
    unless logged_in_user.nil? || loggin_in_user.password != user_params[:password]

    end

    flash[]

  end

  def destroy
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
