class User < ActiveRecord::Base
  has_many :budgets, dependent: :destroy

  def latest_budget
    self.budgets.last_used_budget
  end


  validates :lastname, presence: true
  validates :firstname, presence: true
  validates :email, presence: true, format: {with: /\A[^@]+@([^@\.]+\.)+[^@\.]+\z/}
  validates :password, presence: true, length: {minimum: 8}

end
