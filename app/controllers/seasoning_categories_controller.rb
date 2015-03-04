class SeasoningCategoriesController < ApplicationController
  before_action :set_seasoning_category, only: [:show, :edit, :update, :destroy]

  # GET /seasoning_categories
  # GET /seasoning_categories.json
  def index
    @seasoning_categories = SeasoningCategory.all
  end

  # GET /seasoning_categories/1
  # GET /seasoning_categories/1.json
  def show
  end

  # GET /seasoning_categories/new
  def new
    @seasoning_category = SeasoningCategory.new
  end

  # GET /seasoning_categories/1/edit
  def edit
  end

  # POST /seasoning_categories
  # POST /seasoning_categories.json
  def create
    @seasoning_category = SeasoningCategory.new(seasoning_category_params)

    respond_to do |format|
      if @seasoning_category.save
        format.html { redirect_to @seasoning_category, notice: 'Seasoning category was successfully created.' }
        format.json { render :show, status: :created, location: @seasoning_category }
      else
        format.html { render :new }
        format.json { render json: @seasoning_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /seasoning_categories/1
  # PATCH/PUT /seasoning_categories/1.json
  def update
    respond_to do |format|
      if @seasoning_category.update(seasoning_category_params)
        format.html { redirect_to @seasoning_category, notice: 'Seasoning category was successfully updated.' }
        format.json { render :show, status: :ok, location: @seasoning_category }
      else
        format.html { render :edit }
        format.json { render json: @seasoning_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /seasoning_categories/1
  # DELETE /seasoning_categories/1.json
  def destroy
    @seasoning_category.destroy
    respond_to do |format|
      format.html { redirect_to seasoning_categories_url, notice: 'Seasoning category was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_seasoning_category
      @seasoning_category = SeasoningCategory.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def seasoning_category_params
      params[:seasoning_category]
    end
end
