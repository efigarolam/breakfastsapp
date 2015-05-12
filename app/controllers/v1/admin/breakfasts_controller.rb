module V1
  module Admin
    class BreakfastsController < ApplicationController
      def index
        render json: Breakfast.all, status: :ok
      end

      def show
        @breakfast = Breakfast.find_by(id: params[:id])

        render json: @breakfast, status: :ok
      end

      def create
        @breakfast = Breakfast.new(breakfast_params)

        if @breakfast.save
          render json: @breakfast, status: :ok
        else
          render json: { message: 'Something went wrong.' }.to_json, status: :unprocessable_entity
        end
      end

      def update
        @breakfast = Breakfast.find(params[:id])

        if @breakfast.update_attributes(breakfast_params)
          render json: @breakfast, status: :ok
        else
          render json: { message: 'Something went wrong.' }.to_json, status: :unprocessable_entity
        end
      end

      private

      def breakfast_params
        params.require(:breakfast).permit(:name, :description, :picture, :served_at)
      end
    end
  end
end
