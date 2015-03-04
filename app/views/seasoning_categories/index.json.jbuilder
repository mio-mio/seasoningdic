json.array!(@seasoning_categories) do |seasoning_category|
  json.extract! seasoning_category, :id
  json.url seasoning_category_url(seasoning_category, format: :json)
end
