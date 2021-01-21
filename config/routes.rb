require 'api_constraints'

Rails.application.routes.draw do
  root to: 'home#index'
  namespace :api, defaults: { format: :json } do
    scope module: :v1, constraints: ApiConstraints.new(version: 1, default: true) do
      resources :images, only: [:create, :index, :destroy]
    end
  end
end
