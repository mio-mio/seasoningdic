class SeasoningRecipesController < ApplicationController
  def index
    @seasoning_recipes = SeasoningRecipe.all
  end

  def show
  end

  def category_search
    @seasoning_recipes = SeasoningCategory.where("seasoning_category_id = ?", params[:id].to_i)
    render :index
  end

  def edit
  end
end
