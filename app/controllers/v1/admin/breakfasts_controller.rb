module V1
  module Admin
    class BreakfastsController < BaseController
      before_action :find_breakfast, except: [:index, :create]

      def index
        render json: Breakfast.all, status: :ok
      end

      def show
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
        if @breakfast.update_attributes(breakfast_params)
          render json: @breakfast, status: :ok
        else
          render json: { message: 'Something went wrong.' }.to_json, status: :unprocessable_entity
        end
      end

      def destroy
        if @breakfast.destroy
          render json: @breakfast, status: :ok
        else
          render json: { message: 'Something went wrong.' }.to_json, status: :unprocessable_entity
        end
      end

      private

      def breakfast_params
        params.require(:breakfast).permit(:name, :description, :picture, :served_at)
      end

      def find_breakfast
        @breakfast = Breakfast.find(params[:id])
      end
    end
  end
end
