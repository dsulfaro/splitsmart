Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :friendships, only: [:create, :update, :destroy]
    resources :expenses, only: [:index, :create, :update, :destroy] do
      resources :comments, only: [:create, :index, :destroy]
    end
  end

  get 'api/friends', to: 'api/friends#index', defaults: { format: :json }

  root "static_pages#root"

end
