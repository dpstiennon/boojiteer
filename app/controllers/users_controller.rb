class UsersController < ApplicationController
  def new
    @user = User.new()
  end

  def create
    User.create(param_user)
    redirect_to root_path
  end

  def show

  end


  def edit
  end

  private
  def param_user
    params.require(:user).permit(:firstname, :lastname, :email, :password)
  end
end
