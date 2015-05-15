class AdminController < ApplicationController
  before_filter :check_for_admin_privileges

  def index; end

  private

  def check_for_admin_privileges
    redirect_to root_path unless current_user.admin
  end
end
