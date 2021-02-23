Rails.application.routes.draw do
  resources :images
  root to: 'home#index'
end
