class PagesController < ApplicationController
  def index
  end

  def topics 
    @topics = Course.first.topics
    render json: { data: @topics }
    end 
end
