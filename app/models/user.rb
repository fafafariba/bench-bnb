class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  before_validation :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user && user.valid_password?(password) ? user : nil
  end

  def valid_password?(password)
    BCrypt::Password.new(password_digest) == password #.is_password?(password)
  end

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(@password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(10)
    self.save!
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(10)
  end
end
