module V1
  module Admin
    class BaseController < ApplicationController
      before_filter :check_for_admin_privileges

      private

      def check_for_admin_privileges
        render json: { message: 'Invalid privileges' }, status: 403 unless current_user.admin
      end
    end
  end
end
