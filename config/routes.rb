Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks:  'users/omniauth_callbacks' }
  root to: 'dashboard#index'

  namespace :v1, defaults: { format: :json } do
    resources :breakfasts
    resources :comments, only: :create
    resources :users, only: :show
    resources :rates, only: [:create, :update]
  end

  get '*ember', to: 'dashboard#index'
end
