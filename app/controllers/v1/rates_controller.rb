module V1
  class RatesController < ApplicationController
    def create
      @rate = Rate.new(rate_params)

      if @rate.save
        render json: @rate, status: :ok
      else
        render json: { error: 'Something went wrong' }.to_json, status: :unprocessable_entity
      end
    end

    def update
      @rate = Rate.find_by({
        breakfast_id: rate_params[:breakfast_id],
        user_id: rate_params[:user_id]
      })

      if @rate.update_attributes(rate_params)
        render json: @rate, status: :ok
      else
        render json: { error: 'Something went wrong' }.to_json, status: :unprocessable_entity
      end
    end

    private

    def rate_params
      params.require(:rate).permit(:value, :breakfast_id, :user_id)
    end
  end
end
