Rails.application.routes.draw do
  root 'pages#index'
  get 'topics', to: 'pages#topics'
end
