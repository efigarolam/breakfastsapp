module V1
  class UsersController < ApplicationController
    def show
      render json: User.find(params[:id]), status: :ok
    end
  end
end
