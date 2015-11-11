class Budget < ActiveRecord::Base
  belongs_to :user

  scope :last_used_budget,  ->{order(updated_at: :desc).take(1)}
end
