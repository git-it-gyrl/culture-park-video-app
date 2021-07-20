Rails.application.routes.draw do
  root 'pages#index'
  get 'topics', to: 'pages#topics'
  resources :profile
end