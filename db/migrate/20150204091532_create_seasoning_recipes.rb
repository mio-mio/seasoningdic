class CreateSeasoningRecipes < ActiveRecord::Migration
  def change
    create_table :seasoning_recipes do |t|
      t.string :title
      t.integer :seasoning_category_id
      t.integer :cook_time
      t.integer :serving

      t.timestamps
    end
  end
end
