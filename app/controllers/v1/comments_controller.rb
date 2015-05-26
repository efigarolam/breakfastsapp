module V1
  class CommentsController < ApplicationController
    before_action :find_comment, except: :create

    def create
      @comment = Comment.new(comment_params)

      if @comment.save
        render json: @comment, status: :ok
      else
        render json: { message: 'Something went wrong.' }.to_json, status: :unprocessable_entity
      end
    end

    def update
      if @comment.update_attributes(comment_params)
        render json: @comment, status: :ok
      else
        render json: { message: 'Something went wrong.' }.to_json, status: :unprocessable_entity
      end
    end

    def destroy
      if @comment.destroy
        render json: @comment, status: :ok
      else
        render json: { message: 'Something went wrong.' }.to_json, status: :unprocessable_entity
      end
    end

    private

    def find_comment
      @comment = Comment.find_by(id: params[:id])
    end

    def comment_params
      params.require(:comment).permit(:body, :breakfast_id, :author_id)
    end
  end
end
