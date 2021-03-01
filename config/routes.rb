Rails.application.routes.draw do
  root to: 'home#index'
  resources :attachments, only: %i(index destroy create)
end
