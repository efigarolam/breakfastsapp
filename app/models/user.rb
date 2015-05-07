require 'digest/md5'

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable,
         :trackable, :validatable, :omniauthable

  has_many :comments
  has_many :votes
  after_create :build_gravatar_url

  def self.find_for_google_oauth2(oauth, current_user = nil)
    if valid_email?(oauth['info']['email'])
      user = User.where(email: oauth['info']['email']).first

      unless user
        user                       = User.new
        user.email                 = oauth['info']['email']
        user.name                  = oauth['info']['name']
        user.password              = Devise.friendly_token[0,20]
        user.password_confirmation = user.password
        user.save
      end

      user
    end
  end

  def self.valid_email?(email)
    email.end_with?('crowdint.com')
  end

  private

  def build_gravatar_url
    hash = Digest::MD5.hexdigest(self.email)
    self.update_column(:gravatar_url, "//gravatar.com/avatar/#{hash}")
  end
end
