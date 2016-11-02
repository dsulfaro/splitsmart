class Api::FriendsController < ApplicationController

  def index
    @friends = current_user.friends
    render 'api/friends/index'
  end

end
