# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require "csv"

SeasoningRecipe.delete_all

SeasoningRecipe.connection.execute("delete from sqlite_sequence where name='seasoning_recipes'") 

CSV.foreach('db/seasoning_recipe_sample.csv') do |row|
  p SeasoningRecipe.create(:title => row[0], :seasoning_category_id => row[1].to_i, :cook_time => row[2].to_i, :serving => row[3].to_i)
end


SeasoningCategory.delete_all

SeasoningCategory.connection.execute("delete from sqlite_sequence where name='seasoning_categories'") 

CSV.foreach('db/seasoning_category_sample.csv') do |row|
  p SeasoningCategory.create(:title => row[0])
end