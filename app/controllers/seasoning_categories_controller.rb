class SeasoningCategoriesController < ApplicationController
  def index
    @seasoning_categories = SeasoningCategory.all
  end

  def show
    @seasoning_categories = SeasoningCategory.find(params[:title])
  end
  
  private
    # Use callbacks to share common setup or constraints between actions.
    #def set_show
    #  @seasoning_categories = SeasoningCategory.find(params[:id])
    #end

    # Never trust parameters from the scary internet, only allow the white list through.
    def seasoning_category_params
      params.require(:show).permit(:title)
    end
end
