class User < ActiveRecord::Base

  validates :lastname, presence: true
  validates :firstname, presence: true
  validates :email, presence: true, format: {with: /\A[^@]+@([^@\.]+\.)+[^@\.]+\z/}
  validates :password, presence: true, length: {minimum: 8}

end
