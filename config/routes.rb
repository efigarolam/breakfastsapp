Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks:  'users/omniauth_callbacks' }
  root to: 'dashboard#index'

  namespace :v1, defaults: { format: :json } do
    resources :breakfasts, only: [:index, :show]
    resources :comments, only: [:create, :update, :destroy]
    resources :users, only: :show
    resources :rates, only: [:create, :update]

    namespace :admin do
      resources :breakfasts
    end
  end

  get 'admin', to: 'admin#index'

  get 'admin/*ember', to: 'admin#index'
  get '*ember', to: 'dashboard#index'
end
