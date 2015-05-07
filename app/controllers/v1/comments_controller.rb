module V1
  class CommentsController < ApplicationController
    def create
      @comment = Comment.new(comment_params)

      if @comment.save
        render json: @comment, status: :ok
      else
        render json: { message: 'Something went wrong.' }, status: :unprocessable_entity
      end
    end

    private

    def comment_params
      params.require(:comment).permit(:body, :breakfast_id, :author_id)
    end
  end
end
