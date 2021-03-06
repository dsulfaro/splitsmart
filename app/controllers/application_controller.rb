class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def current_user
    # debugger
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    # debugger
    if user.username != "guest"
      user.reset_session_token
    end
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout!
    if current_user.username == "guest"
      session[:session_token] = nil
      @current_user = nil
    else
      current_user.reset_session_token
      session[:session_token] = nil
      @current_user = nil
    end
  end

end

# $.ajax({
#   method: 'POST',
#   url: 'api/users',
#   data: { user: dan },
#   success,
#   error
# });
