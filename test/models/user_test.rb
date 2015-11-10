require 'test_helper'

class UserTest < ActiveSupport::TestCase

  def setup
    @user = users(:david)
  end


  test 'User with missing first name fails validation' do
    @user.firstname = ''
    assert_not @user.valid?
  end

  test 'User with missing last name fails validation' do
    @user.lastname = ''
    assert_not @user.valid?
  end

  test 'User with missing email fails validation' do
    @user.email = ''
    assert_not @user.valid?
  end

  test 'user with all appropriate fields is valid' do
    assert @user.valid?
  end

  test 'user invalidates with bogus email address' do
    @user.email = 'dude@duuuuuuuude'
    assert_not @user.valid?
  end

  test 'invalid if password too short' do
    @user.password = 'sex'
    assert_not @user.valid?
  end

end
