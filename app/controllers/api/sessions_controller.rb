class Api::SessionsController < ApplicationController
  def create
    username, password = session_params[:username], session_params[:password]
    @user = User.find_by_credentials(username, password)
    if @user
      login(@user)
      render('api/users/show')
    else
      render(json: ["Invalid username/password combination"],
        status: 401)
    end
  end

  def destroy
    if current_user
      current_user.reset_session_token
      logout
      render json: {}
    else
      render(json: ["No user to logout"],
      status: 404)
    end
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end
end
