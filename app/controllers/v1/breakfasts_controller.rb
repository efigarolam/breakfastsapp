module V1
  class BreakfastsController < ApplicationController
    def index
      render json: Breakfast.all, status: :ok
    end

    def show
      @breakfast = Breakfast.find_by(id: params[:id])

      render json: @breakfast, status: :ok
    end
  end
end
