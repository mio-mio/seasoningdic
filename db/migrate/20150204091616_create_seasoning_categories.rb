class CreateSeasoningCategories < ActiveRecord::Migration
  def change
    create_table :seasoning_categories do |t|
      t.string :title

      t.timestamps
    end
  end
end
