# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

budget1 = Budget.new(date: DateTime.now.beginning_of_day)
budget2 = Budget.new(date: 1.month.ago)

User.create(budgets: [budget1, budget2], firstname:'David', lastname:'stiennon', email:'dstiennon@ackmanndickenson.com', password:'password')

