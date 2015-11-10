require 'test_helper'

class SessionsControllerTest < ActionController::TestCase
  def setup
    @user = users(:david)
  end
  test "should get new" do
    get :new
    assert_response :success
  end

  test 'create and delete actions work' do
    delete :destroy
    assert_response :success

    post :create, user: {email:'dude@dude.com', password:'password'}
    assert_response :success
  end



end
