require 'test_helper'

class SeasoningCategoriesControllerTest < ActionController::TestCase
  setup do
    @seasoning_category = seasoning_categories(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:seasoning_categories)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create seasoning_category" do
    assert_difference('SeasoningCategory.count') do
      post :create, seasoning_category: {  }
    end

    assert_redirected_to seasoning_category_path(assigns(:seasoning_category))
  end

  test "should show seasoning_category" do
    get :show, id: @seasoning_category
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @seasoning_category
    assert_response :success
  end

  test "should update seasoning_category" do
    patch :update, id: @seasoning_category, seasoning_category: {  }
    assert_redirected_to seasoning_category_path(assigns(:seasoning_category))
  end

  test "should destroy seasoning_category" do
    assert_difference('SeasoningCategory.count', -1) do
      delete :destroy, id: @seasoning_category
    end

    assert_redirected_to seasoning_categories_path
  end
end
